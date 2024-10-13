import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/OpenLab.module.css'; // 스타일 파일 연결

const OpenLab = () => {
  const router = useRouter();

  useEffect(() => {
    console.log('오픈랩 소개 페이지 로딩됨');
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>오픈랩 소개</h1>
      <p className={styles.description}>
        이 페이지는 오픈랩 소개 내용을 표시합니다. 자세한 내용은 추후 업데이트될 예정입니다.
      </p>
    </div>
  );
};

export default OpenLab;
