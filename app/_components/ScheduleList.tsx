'use client';

import React from 'react';
import { ProgramResponseData, ProgramData } from '../_types/api';
import Image from 'next/image';


const DEFAULT_ICON = '/svgs/default-icon.svg'; // 기본 아이콘 경로


const ScheduleList: React.FC<{ programs: ProgramResponseData[] }> = ({ programs }) => {

  const getIcon = (program: ProgramData) => {
    return (
      <Image
        src={program.icon || DEFAULT_ICON}
        alt={program.name}

        width={24}
        height={24}
      />
    );
  };

  const formatDate = (timeString: string) => {
    // Date로 바꿀 수 없으면 그대로 반환
    if (isNaN(new Date(timeString).getTime())) {
      return timeString;
    }
    const date = new Date(timeString);
    return date.toLocaleDateString('ko-KR', { month: '2-digit', day: '2-digit' }) + ' (' + date.toLocaleDateString('ko-KR', { weekday: 'short' }) + ')';

  }

  const formatTime = (timeString: string) => {
    const date = new Date(timeString);
    return date.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="bg-white p-4 rounded-lg">
      {programs.map((programGroup, groupIndex) => (
        <div key={groupIndex} className="p-3 rounded mb-6">
          <h2 className="text-center text-gray-500 font-semibold mb-5">{formatDate(programGroup.title)}</h2>
          <div className="space-y-4">
            {programGroup.data.map((program, programIndex) => (
              <div key={programIndex} className="flex items-start mb-5">
                <div className="bg-blue-100 p-2 rounded-lg mr-5">
                  {getIcon(program)}
                </div>
                <div>
                  <div className="font-semibold">{program.name}</div>
                  {!program.is_regular && (
                    <div className="text-sm">{formatTime(program.start_time_formatted)}</div>
                  )}
                  
                  <div className="text-sm text-gray-600">{program.location}</div>
                  {/* {program.description && (
                    <div className="text-sm text-gray-500">{program.description}</div>
                  )} */}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScheduleList;