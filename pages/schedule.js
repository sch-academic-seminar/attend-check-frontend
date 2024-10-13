// pages/schedule.js
import { useEffect, useState } from 'react';
import styles from '../styles/Schedule.module.css'; // 필요한 스타일 파일
import FooterNav from '../components/FooterNav'; // FooterNav 컴포넌트 사용

const Schedule = () => {
  const [scheduleData, setScheduleData] = useState([]); // 일정 데이터 상태 관리
  const [loading, setLoading] = useState(true); // 로딩 상태 관리

  // API에서 일정 데이터를 받아오는 함수
  const fetchScheduleData = async () => {
    try {
      const response = await fetch('/api/schedule'); // 가상 API 호출
      const data = await response.json(); // 응답 데이터 JSON 변환
      setScheduleData(data); // 데이터 상태 업데이트
      setLoading(false); // 로딩 상태 해제
    } catch (error) {
      console.error('일정 데이터를 가져오는 중 오류:', error);
      setLoading(false); // 로딩 상태 해제
    }
  };

  // 컴포넌트가 마운트될 때 API 호출
  useEffect(() => {
    fetchScheduleData();
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src="/logo.png" alt="로고" className={styles.logo} />
        <h1>일정표</h1>
      </header>

      {loading ? (
        <p>로딩 중...</p> // 로딩 중 표시
      ) : (
        scheduleData.length > 0 ? (
          scheduleData.map((event, index) => (
            <div key={index} className={styles.scheduleItem}>
              <img src={event.icon} alt="아이콘" className={styles.icon} />
              <div>
                <h2>{event.title}</h2>
                <p>{event.date}</p>
                <p>{event.location}</p>
              </div>
            </div>
          ))
        ) : (
          <p>일정이 없습니다.</p> // 일정이 없을 때 표시
        )
      )}

      <FooterNav />
    </div>
  );
};

export default Schedule;
