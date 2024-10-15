// components/DepartmentRanking.tsx

import React from 'react';
// import { RankingData, DepartmentRanking } from '../types/ranking';

import { HomeResponseData } from '../_types/api';
import Image from 'next/image';



interface DepartmentRankingProps {
  rankingData: HomeResponseData;
}

const DepartmentRanking: React.FC<DepartmentRankingProps> = ({ rankingData }) => {
  const { user_department_id, department_rankings } = rankingData;

  return (
    <div className="bg-white rounded-lg">
      <h2 className="text-2xl font-bold mb-4">학과별 랭킹</h2>
      <div className="space-y-4">
        {department_rankings.map((dept: any, index: any) => (
          <div 
            key={dept.id} 
            className={`flex items-center justify-between p-3 rounded ${
              dept.id === user_department_id ? 'bg-gray-300' : 'bg-white'
            }`}
          >
            <div className="flex items-center space-x-3">
              {/* <span className="text-lg font-semibold">{index + 1}</span> */}

              <div className="flex flex-col items-center p-2 bg-gray-100 rounded-lg">
                <Image src="svgs/trophy.svg" alt="trophy" width={24} height={24} className="" />
              </div>
              <div>
                <p className="font-medium">{dept.name}</p>
                <p className="text-sm text-gray-500">
                  최고점: {dept.top_student} - {dept.top_student_points}회
                </p>
              </div>
            </div>
            <span className="text-lg font-bold">{dept.total_points}회</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentRanking;