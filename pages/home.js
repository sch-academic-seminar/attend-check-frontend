import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; // useRouter 임포트
import FooterNav from '../components/FooterNav'; // FooterNav 컴포넌트 임포트
import styles from '../styles/Home.module.css'; // CSS 파일 임포트

const Home = () => {
  const [rankings, setRankings] = useState([]);
  const [banners, setBanners] = useState([]);
  const [currentBanner, setCurrentBanner] = useState(0);
  const [timer, setTimer] = useState(null);

  const router = useRouter(); // useRouter 훅 사용

  // 데이터 가져오기 함수
  const fetchData = async () => {
    try {
      const [rankResponse, bannerResponse] = await Promise.all([
        fetch('/api/rankings'),
        fetch('/api/banners'),
      ]);
      setRankings(await rankResponse.json());
      setBanners(await bannerResponse.json());
    } catch (error) {
      console.error('데이터를 가져오는 중 오류 발생:', error);
    }
  };

  const startBannerTimer = (delay = 10000) => {
    if (timer) clearTimeout(timer);
    const newTimer = setTimeout(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, delay);
    setTimer(newTimer);
  };

  useEffect(() => {
    fetchData();
    startBannerTimer(3000);
    return () => clearTimeout(timer);
  }, [banners.length]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src="/logo.png" alt="로고" className={styles.logo} />
        <h1>SW융합대학 학술제</h1>
      </header>

      <section className={styles.banner}>
        {banners.length > 0 && (
          <>
            <h2>{banners[currentBanner].title}</h2>
            <p>{banners[currentBanner].date}</p>
            <p>{banners[currentBanner].description}</p>
          </>
        )}

        <div className={styles.pagination}>
          {banners.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${index === currentBanner ? styles.active : ''}`}
              onClick={() => {
                setCurrentBanner(index);
                startBannerTimer();
              }}
            />
          ))}
        </div>
      </section>

      <div className={styles.categories}>
        <div
          className={styles.categoryItem}
          onClick={() => router.push('/exhibit')} // 페이지 이동
        >
          <img src="/icons/exhibit.png" alt="출품작 소개" className={styles.icon} />
        </div>

        <div
          className={styles.categoryItem}
          onClick={() => router.push('/openlab')} // 페이지 이동
        >
          <img src="/icons/openlab.png" alt="오픈랩 소개" className={styles.icon} />
        </div>

        <div
          className={styles.categoryItem}
          onClick={() => router.push('/prize')} // 페이지 이동
        >
          <img src="/icons/prize.png" alt="경품 소개" className={styles.icon} />
        </div>
      </div>

      <section className={styles.rankings}>
        <h2>단과대 참여순위</h2>
        <ul>
          {rankings.map((ranking) => (
            <li key={ranking.id} className={styles.rankingItem}>
              🏆 {ranking.department} - {ranking.points} points
              <br />
              {ranking.name} - {ranking.score}점
            </li>
          ))}
        </ul>
      </section>

      <FooterNav /> {/* FooterNav 컴포넌트 추가 */}
    </div>
  );
};

export default Home;
