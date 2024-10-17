'use client';

import { usePathname } from 'next/navigation';


export default function Header() {
  const pathname = usePathname();

  const getHeaderTitle = () => {
    switch (pathname) {
      case '/login':
        return '로그인';
      case '/register':
        return '회원가입';
      case '/':
        return 'SW융합대학 학술제';
      case '/home':
        return 'SW융합대학 학술제';
      case '/schedule':
        return '일정표';
      case '/history':
        return '참여기록';
      case '/profile':
        return '내정보';
      default:
        return 'SW융합대학 학술제';
    }
  };

  return (
    <header className="bg-white p-4 sticky top-0 z-10">
      <div className="justify-between text-center max-w-6xl mx-auto">
        <h1 className="text-xl font-bold">{getHeaderTitle()}</h1>
      </div>
    </header>
  );
}