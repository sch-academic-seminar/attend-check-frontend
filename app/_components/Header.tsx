'use client';

<<<<<<< HEAD
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-10">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* <Link href="/"> */}
          {/* <Image src="/logo.png" alt="SW융합대학 학술제" width={40} height={40} /> */}
        {/* </Link> */}
        <h1 className="text-xl font-bold">SW융합대학 학술제</h1>
        <button aria-label="Search">
          <Image src="/search-icon.svg" alt="Search" width={24} height={24} />
        </button>
=======
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
>>>>>>> 28e2b78 (Initial commit or update project)
      </div>
    </header>
  );
}