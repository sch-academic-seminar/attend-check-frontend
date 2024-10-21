'use client';

<<<<<<< HEAD
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="p-4 max-w-6xl mx-auto">
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
          <Image src="/mobile-icon.svg" alt="출품작 소개" width={40} height={40} />
          <span className="mt-2 text-sm">출품작 소개</span>
        </Link>
        <Link href="/openlab" className="flex flex-col items-center p-4 bg-green-100 rounded-lg">
          <Image src="svgs/lab.svg" alt="오픈랩 소개" width={40} height={40} />
          <span className="mt-2 text-sm">오픈랩 소개</span>
        </Link>
        <Link href="/awards" className="flex flex-col items-center p-4 bg-blue-100 rounded-lg">
          <Image src="/award-icon.svg" alt="경품 소개" width={40} height={40} />
          <span className="mt-2 text-sm">경품 소개</span>
        </Link>
      </section>

      {/* 단과대 참여 순위 */}
      <section>
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
      </section>
=======
import { useEffect, useState } from "react";

import { HomeResponseData } from '../../_types/api';
import { getHomeData } from '../../_api/home/getHomeData';
import BannerSlider from '../../_components/BannerSlider';
import DepartmentRanking from '../../_components/DepartmentRanking';
import MenuSection from "../../_components/MenuIcon";

const banners = [
  { imageUrl: 'banner1.jpg' },
  { imageUrl: 'banner2.jpg' },
  { imageUrl: 'banner3.jpg' },
];


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

  return (
    <div className="p-3 max-w-6xl mx-auto">
      {/* 배너 섹션 */}
      <section className="bg-blue-600 text-white rounded-lg">
        {/* <h2 className="text-2xl font-bold mb-2">대기업, 너도 갈 수 있다!</h2>
        <p className="mb-2">11.06 (THU) 14:00, ML415</p>
        <p>사물인터넷학과 17학번 졸업생 XXX</p>
        <p>(현) 네카라쿠배 백엔드 개발자</p>
        <p>(전) 단군마케 백엔드 개발자</p> */}
        <div>
          <BannerSlider banners={banners} height="200px" />
          {/* 나머지 페이지 내용 */}
        </div>
      </section>

      {/* 메뉴 섹션 */}
    <section className="flex justify-center items-center p-5 w-full">
      <MenuSection />
      {/* <div className="flex justify-between w-full max-w-md">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center w-1/3">
            <div className={`${item.color} rounded-xl p-3 mb-2`}>
              <div className="w-8 h-8">
                <img src={item.icon} alt={item.text} className="w-full h-full" />
              </div>
            </div>
            <span className="text-sm text-center">{item.text}</span>
          </div>
        ))}
      </div> */}
    </section>

      <section>

      {/* 단과대 참여 순위 */}
      <div className="container mx-auto px-4 py-8">
      <DepartmentRanking rankingData={rankingData} />

    </div>
      </section>

>>>>>>> 28e2b78 (Initial commit or update project)
    </div>
  );
}