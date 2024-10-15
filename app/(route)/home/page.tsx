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

      {/* 메뉴 섹션 */}
      <section className="grid grid-cols-3 gap-4 mb-6">
        <Link href="/projects" className="flex flex-col items-center p-4 bg-yellow-100 rounded-lg">
          <Image src="svgs/lab.svg" alt="출품작 소개" width={40} height={40} />
          <span className="mt-2 text-sm">출품작 소개</span>
        </Link>
        <Link href="/openlab" className="flex flex-col items-center p-4 bg-green-100 rounded-lg">
          <Image src="svgs/lab.svg" alt="오픈랩 소개" width={40} height={40} />
          <span className="mt-2 text-sm">오픈랩 소개</span>
        </Link>
        <Link href="/awards" className="flex flex-col items-center p-4 bg-blue-100 rounded-lg">
          <Image src="svgs/lab.svg" alt="경품 소개" width={40} height={40} />
          <span className="mt-2 text-sm">경품 소개</span>
        </Link>
      </section>

      <section>

      <div className="container mx-auto px-4 py-8">
      <DepartmentRanking rankingData={rankingData} />
      {/* 다른 홈 페이지 컨텐츠 */}
    </div>
      </section>

      {/* 단과대 참여 순위 */}
      {/* <section>
        <h3 className="text-xl font-bold mb-4">단과대 참여순위</h3>
        <ul className="space-y-4">
          {[
            { name: '사물인터넷학과', point: 150, students: '17학번 박X중 - 30점' },
            { name: '정보보호학과', point: 100, students: '23학번 박X중 - 30점' },
            { name: '의료IT학과', point: 100, students: '24학번 박X중 - 30점' },
            { name: 'AI 빅데이터학과', point: 100, students: '17학번 박X중 - 30점' },
            { name: '컴퓨터소프트웨어공학과', point: 100, students: '17학번 박X중 - 30점' },
            { name: '메타버스&게임학과', point: 100, students: '17학번 박X중 - 30점' },
          ].map((dept, index) => (
            <li key={index} className={`flex items-center p-4 rounded-lg ${index === 2 ? 'bg-gray-200' : 'bg-white'}`}>
              <Image src="svgs/trophy.svg" alt="trophy" width={24} height={24} className="mr-4" />
              <div>
                <h4 className="font-bold">{dept.name} - {dept.point} point</h4>
                <p className="text-sm text-gray-600">{dept.students}</p>
              </div>
            </li>
          ))}
        </ul>
      </section> */}
    </div>
  );
}