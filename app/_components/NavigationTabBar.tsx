'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function NavigationTabBar() {
  const pathname = usePathname();

  // 로그인 및 회원가입 페이지에서는 탭바를 숨깁니다
  if (pathname === '/login' || pathname === '/register') {
    return null;
  }

  const navItems = [
    { href: '/', label: '홈', icon: '/svgs/home.svg' },
    { href: '/schedule', label: '일정표', icon: '/svgs/calendar.svg' },
    { href: '/participation', label: '참여기록', icon: '/svgs/history.svg' },
    { href: '/profile', label: '내정보', icon: '/svgs/people.svg' },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto">
        <ul className="flex justify-around items-center h-16">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={`flex flex-col items-center ${pathname === item.href ? 'text-blue-600' : 'text-gray-600'}`}>
                <Image 
                  src={item.icon} 
                  alt={item.label} 
                  width={24} 
                  height={24} 
                  className={pathname === item.href ? 'text-blue-600' : 'text-gray-600'}
                />
                <span className="text-xs mt-1">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}