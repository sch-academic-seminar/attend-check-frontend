'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from "react";

import { HomeResponseData } from '../../_types/api';
import { getHomeData } from '../../_api/home/getHomeData';
import DepartmentRanking from '../../_components/DepartmentRanking';

// 실제 환경에서는 이 데이터를 API에서 가져와야 합니다.
// const mockRankingData: HomeResponseData = {
//   "user_department_id": 1,
//   "department_rankings": [
//     {
//       "id": 1,
//       "name": "사물인터넷학과",
//       "total_points": 1687,
//       "top_student": "박찬종",
//       "top_student_points": 100
//     },
//     {
//       "id": 2,
//       "name": "정보보호학과",
//       "total_points": 1687,
//       "top_student":  "홍길동",
//       "top_student_points": 100
//     },
//     // ... 나머지 데이터
//   ]
// };


export default function HomePage() {
  const [rankingData, setRankingData] = useState<HomeResponseData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const data: HomeResponseData = await getHomeData();
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

  const items = [
    { icon: "svgs/lab.svg", text: "출품작", color: "bg-yellow-50", iconColor: "text-yellow-400" },
    { icon: "svgs/code-dots.svg", text: "오픈랩", color: "bg-green-50", iconColor: "text-green-400" },
    { icon: "svgs/gift.svg", text: "경품", color: "bg-blue-50", iconColor: "text-blue-400" },
  ];
  
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

      {/* 메뉴 섹션 */}
      <section className="flex justify-center items-center p-5">
        <div className="flex space-x-6">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className={`${item.color} rounded-xl p-3 mb-2`}>
                <div className="w-6 h-6">
                  {/* 아이콘 컴포넌트나 이미지를 여기에 넣습니다 */}
                  <img src={item.icon} alt={item.text} className={`w-6 h-6`}  />
                </div>
              </div>
              <span className="text-xs text-center">{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      <section>

      {/* 단과대 참여 순위 */}
      <div className="container mx-auto px-4 py-8">
      <DepartmentRanking rankingData={rankingData} />

    </div>
      </section>

    </div>
  );
}