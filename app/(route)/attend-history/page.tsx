'use client';
import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import axiosInstance from '../../_api/axiosInstance';

export default function AttendHistoryPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 확인
  const [loginAlert, setLoginAlert] = useState(false); // 로그인 필요 알림 표시
  const router = useRouter();
  const searchParams = useSearchParams(); // 쿼리 스트링 접근
  // QR 코드로부터 프로그램 ID를 받아 상태에 저장
  const [programId, setProgramId] = useState(null);
  // 로그인 상태 체크 함수
  const checkLoginStatus = async () => {
    try {
      const response = await axiosInstance.get('/auth/status'); // 예시: 로그인 상태를 확인하는 API
      setIsLoggedIn(response.data.isLoggedIn);
    } catch (error) {
      console.error('로그인 상태 확인 실패:', error);
      setIsLoggedIn(false);
    }
  };
  // 쿼리 스트링 유지
  useEffect(() => {
    checkLoginStatus(); // 컴포넌트가 로드될 때 로그인 상태를 확인
    const id = searchParams.get('programId');
    if (id) {
      setProgramId(Number(id));
      if (isLoggedIn) {
        setShowPopup(true);
      } else {
        // 로그인이 되어 있지 않으면 로그인 페이지로 이동
        setLoginAlert(true);
        router.push('/login');
      }
    }
  }, [searchParams, isLoggedIn]);
  // 쿼리 스트링이 유지된 상태로 페이지 이동
  const navigateWithQuery = (path) => {
    const url = new URL(window.location.href);
    const query = url.search;
    router.push(`${path}${query}`);
  };
  // "예" 버튼 클릭 시 참여 요청 보내기
  const handleConfirm = async () => {
    setIsSubmitting(true);
    try {
      const response = await axiosInstance.post(`/programs/${programId}/attend/`, {
        username: '20171534',
      });
      alert('참여가 성공적으로 기록되었습니다!');
      setShowPopup(false);
      navigateWithQuery('/attend-history');
    } catch (error) {
      console.error('참여 실패:', error);
      alert('참여에 실패했습니다. 다시 시도해 주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };
  // "아니요" 버튼 클릭 시 팝업 닫기
  const handleCancel = () => {
    setShowPopup(false);
  };
  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">참여 내역</h1>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg">
            <p className="mb-4">이 행사에 참여하시겠습니까?</p>
            <div className="flex justify-end">
              <button
                onClick={handleConfirm}
                disabled={isSubmitting}
                className={`py-2 px-4 mr-2 rounded ${
                  isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white'
                }`}
              >
                {isSubmitting ? '처리 중...' : '예'}
              </button>
              <button
                onClick={handleCancel}
                disabled={isSubmitting}
                className="py-2 px-4 bg-gray-300 rounded"
              >
                아니요
              </button>
            </div>
          </div>
        </div>
      )}
      {loginAlert && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg">
            <p className="mb-4">로그인 후 다시 QR 코드를 찍어주세요!</p>
            <button
              onClick={() => setLoginAlert(false)}
              className="py-2 px-4 bg-blue-500 text-white rounded"
            >
              확인
            </button>
          </div>
        </div>
      )}
    </div>
  );
}