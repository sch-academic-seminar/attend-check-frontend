'use client';

import React, { useEffect, useState } from 'react';
import { getHistoryListData } from '../../_api/programs/getHistoryList';

import { HistoryResponseData, HistoryData } from '../../_types/api';
import HistoryList from '../../_components/HistoryList';


function TotalScore({ total_point }) {
  return (
    <div className="flex flex-col items-center justify-center py-6 bg-white">
      <p className="text-gray-500 font-bold mb-2">내 점수</p>
      <p className="text-4xl font-bold text-blue-800">{total_point}점</p>
    </div>
  );
}


const HistoryPage: React.FC = () => {
  const [total_point, setTotalPoint] = useState<number>(0);
  const [attend_histories, setHistories] = useState<HistoryData[]>([]);

  
  useEffect(() => {
    // API에서 프로그램 데이터를 가져오는 로직
    const fetchData = async () => {
      try {
        const responseData: HistoryResponseData = await getHistoryListData();
        
        setTotalPoint(responseData.total_point);
        setHistories(responseData.attend_histories);
      } catch (error) {
        console.error('Failed to fetch programs:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <TotalScore total_point={ total_point } />
      <div className="container mx-auto px-2 py-8">
        <HistoryList attend_histories={attend_histories} />
      </div>
    </div>
  );
};

export default HistoryPage;