// pages/index.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // 페이지가 로드될 때 로그인 페이지로 리다이렉트
    router.push('/login');
  }, [router]);

  return null; // 화면에 아무것도 렌더링하지 않음
}
