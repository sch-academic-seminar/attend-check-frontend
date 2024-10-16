'use client';

import React from 'react';
import Image from 'next/image';
import { useAuth } from '../../_context/AuthContext';
import { useRouter } from 'next/navigation';


export default function ProfilePage() {

  const router = useRouter();
  const user = useAuth().user;
  
  // 사용자가 로그인하지 않은 경우, 로그인 페이지로 리다이렉트
  React.useEffect(() => {
  }, [user, router]);

  return (
    <div className="container mx-auto px-2 py-8">
      <div className="bg-white p-4 rounded-lg">
        <div className="p-3 rounded mb-6">

        {/* 이름 */}
        <div className="flex items-start mb-5">
          <div className="bg-blue-100 p-2 rounded-lg mr-5">
            <Image
              src="/svgs/people.svg"
              alt="people"
              width={24}
              height={24}
            />
          </div>
          <div>
            <div className="font-semibold">이름</div>
            <div className="text-sm text-gray-500">{user?.name}</div>

            {/* <div className="text-sm text-gray-600">{program.location}</div> */}
            {/* {program.description && (
              <div className="text-sm text-gray-500">{program.description}</div>
            )} */}
          </div>
        </div>

        {/* 학과 */}
        <div className="flex items-start mb-5">
          <div className="bg-blue-100 p-2 rounded-lg mr-5">
            <Image
              src="/svgs/school.svg"
              alt="school"
              width={24}
              height={24}
            />
          </div>
          <div>
            <div className="font-semibold">학과</div>
            <div className="text-sm text-gray-500">{user?.department}</div>

            {/* <div className="text-sm text-gray-600">{program.location}</div> */}
            {/* {program.description && (
              <div className="text-sm text-gray-500">{program.description}</div>
            )} */}
          </div>
        </div>

        {/* 학번 */}
        <div className="flex items-start mb-5">
          <div className="bg-blue-100 p-2 rounded-lg mr-5">
            <Image
              src="/svgs/id-card.svg"
              alt="user"
              width={24}
              height={24}
            />
          </div>
          <div>
            <div className="font-semibold">학번</div>
            <div className="text-sm text-gray-500">{user?.username}</div>

            {/* <div className="text-sm text-gray-600">{program.location}</div> */}
            {/* {program.description && (
              <div className="text-sm text-gray-500">{program.description}</div>
            )} */}
          </div>
        </div>
        
      </div>
      </div>
    </div>
  );
}