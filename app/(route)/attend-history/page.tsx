'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import axiosInstance from '../../_api/axiosInstance';

export default function AttendHistoryPage() {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const router = useRouter();
  const searchParams = useSearchParams(); // 쿼리 스트링 접근

  // QR 코드로부터 프로그램 ID를 받아 상태에 저장
  const [programId, setProgramId] = useState<number | null>(null);

  // 쿼리 스트링 유지
  useEffect(() => {
    const id = searchParams.get('programId'); // QR 코드로부터 programId 확인
    if (id) {
      setProgramId(Number(id));
      setShowPopup(true); // 프로그램 ID가 있으면 팝업 표시
    }
  }, [searchParams]);

  // 쿼리 스트링이 유지된 상태로 페이지 이동
  const navigateWithQuery = (path: string) => {
    const url = new URL(window.location.href);
    const query = url.search; // 쿼리 스트링 유지
    router.push(`${path}${query}`); // 쿼리 포함하여 이동
  };

  // "예" 버튼 클릭 시 참여 요청 보내기
  const handleConfirm = async () => {
    setIsSubmitting(true); // 요청 상태 설정

    try {
      const response = await axiosInstance.post(`/programs/${programId}/attend/`, {
        username: '20171534', // 예시 사용자 ID
      });

      alert('참여가 성공적으로 기록되었습니다!');
      setShowPopup(false); // 팝업 닫기

      // 쿼리 스트링을 포함한 상태로 참여 내역 페이지로 이동
      navigateWithQuery('/attend-history');
    } catch (error) {
      console.error('참여 실패:', error);
      alert('참여에 실패했습니다. 다시 시도해 주세요.');
    } finally {
      setIsSubmitting(false); // 요청 상태 해제
    }
  };

  // "아니요" 버튼 클릭 시 팝업 닫기
  const handleCancel = () => {
    setShowPopup(false); // 팝업 닫기
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
    </div>
  );
}
