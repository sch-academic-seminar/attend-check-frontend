import { useRouter } from 'next/router';
import styles from '../styles/FooterNav.module.css'; // 스타일 임포트

const FooterNav = () => {
  const router = useRouter();

  return (
    <nav className={styles.footer}>
      <div className={styles.navItem} onClick={() => router.push('/home')}>
        <img src="/icons/home.png" alt="홈" />
      </div>
      <div className={styles.navItem} onClick={() => router.push('/schedule')}>
        <img src="/icons/calendar.png" alt="일정표" />
      </div>
      <div className={styles.navItem} onClick={() => router.push('/participation')}>
        <img src="/icons/history.png" alt="참여기록" />
      </div>
      <div className={styles.navItem} onClick={() => router.push('/profile')}>
        <img src="/icons/profile.png" alt="내정보" />
      </div>
    </nav>
  );
};

export default FooterNav;
