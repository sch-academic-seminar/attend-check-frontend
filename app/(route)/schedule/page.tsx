'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from "react";

import { HomeResponseData } from '../../_types/api';
import { getHomeData } from '../../_api/home/getHomeData';
import DepartmentRanking from '../../_components/DepartmentRanking';

// 실제 환경에서는 이 데이터를 API에서 가져와야 합니다.
const mockRankingData: HomeResponseData = {
  "user_department_id": 1,
  "department_rankings": [
    {
      "id": 1,
      "name": "사물인터넷학과",
      "total_points": 1687,
      "top_student": "박찬종",
      "top_student_points": 100
    },
    {
      "id": 2,
      "name": "정보보호학과",
      "total_points": 1687,
      "top_student":  "홍길동",
      "top_student_points": 100
    },
    // ... 나머지 데이터
  ]
};


export default function HomePage() {
  const [rankingData, setRankingData] = useState<HomeResponseData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const data: HomeResponseData = await getHomeData();
        console.log(data);
        setRankingData(data);

      } catch (error) {
        console.error('Login failed', error);
        // 에러 처리
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);


  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러: {error}</div>;
  if (!rankingData) return <div>데이터가 없습니다</div>;


  return (
    <div className="p-3 max-w-6xl mx-auto">
      {/* 배너 섹션 */}
      <section className="bg-blue-600 text-white p-6 rounded-lg mb-6">
        <h2 className="text-2xl font-bold mb-2">대기업, 너도 갈 수 있다!</h2>
        <p className="mb-2">11.06 (THU) 14:00, ML415</p>
        <p>사물인터넷학과 17학번 졸업생 XXX</p>
        <p>(현) 네카라쿠배 백엔드 개발자</p>
        <p>(전) 단군마케 백엔드 개발자</p>
      </section>
    </div>
  );
}