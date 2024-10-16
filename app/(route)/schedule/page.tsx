'use client';

import React, { useEffect, useState } from 'react';
import { getProgramListData } from '../../_api/programs/getProgramList';

import { ProgramResponseData } from '../../_types/api';
import ScheduleList from '../../_components/ScheduleList';


const SchedulePage: React.FC = () => {
  const [programs, setPrograms] = useState<ProgramResponseData[]>([]);

  useEffect(() => {
    // API에서 프로그램 데이터를 가져오는 로직
    const fetchData = async () => {
      try {
        const responseData: ProgramResponseData[] = await getProgramListData();
        setPrograms(responseData);
      } catch (error) {
        console.error('Failed to fetch programs:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-2 py-8">
      <ScheduleList programs={programs} />
    </div>
  );
};

export default SchedulePage;