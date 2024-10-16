'use client';

import React from 'react';
import { HistoryData } from '../_types/api';
import Image from 'next/image';


const DEFAULT_ICON = '/svgs/school.svg'; // 기본 아이콘 경로


const HistoryList: React.FC<{ attend_histories: HistoryData[] }> = ({ attend_histories }) => {

  function TotalScore({ score }) {
    return (
      <div className="flex flex-col items-center justify-center py-8 bg-white mb-6">
        <p className="text-gray-500 mb-2">내 점수</p>
        <p className="text-4xl font-bold text-blue-800">100점</p>
      </div>
    );
  }

  const getIcon = (history: HistoryData) => {
    return (
      <Image
        src={history.program_icon || DEFAULT_ICON}
        alt={history.program_name}
        width={24}
        height={24}
      />
    );
  };

  // return (
  //   <div className="bg-white p-4 rounded-lg">
  //     {attend_histories.map((historyData, groupIndex) => (
  //       <div key={groupIndex} className="p-3 rounded mb-6">
  //         {/* <h2 className="text-center text-gray-500 font-semibold mb-5">{formatDate(historyData.program_name)} </h2> */}
  //         <div className="space-y-4">
  //           <div className="flex items-start mb-5">
  //               <div className="bg-blue-100 p-2 rounded-lg mr-3">
  //                 {getIcon(historyData)}
  //               </div>
  //               <div>
  //                 <div className="font-semibold">{historyData.program_name}</div>
  //                 <div className="text-sm text-gray-600">{historyData.attend_history_formatted}</div>
  //                 {/* {program.description && (
  //                   <div className="text-sm text-gray-500">{program.description}</div>
  //                 )} */}
  //               </div>
  //               <span className="text-lg font-bold">{historyData.point}회</span>

  //           </div>
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // );
  return (
    <div className="bg-white p-3 rounded-lg">

      {/* <TotalScore score={1} /> */}

      {attend_histories.map((historyData, groupIndex) => (
        <div key={groupIndex} className="p-3 rounded mb-6">
          <div className="space-y-4">
            <div className="flex items-start mb-5">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-5">
                  {getIcon(historyData)}
                </div>
                <div>
                  <div className="font-semibold">{historyData.program_name}</div>
                  <div className="text-sm text-gray-600">{historyData.attend_history_formatted}</div>
                </div>
              </div>

            <div className="flex flex-col items-end ml-auto">
              <span className="text-lg font-bold text-blue-800">+{historyData.point}회</span>
              <span className="text-xs text-gray-400">총 {historyData.after_point}회</span>
            </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HistoryList;