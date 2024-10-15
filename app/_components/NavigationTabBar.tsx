'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavigationTabBar() {
  const pathname = usePathname();

  if (pathname === '/login' || pathname === '/register') {
    return null;
  }

  const navItems = [
    { href: '/home', label: '홈', icon: 'home' },
    { href: '/schedule', label: '일정표', icon: 'calendar' },
    { href: '/participation', label: '참여기록', icon: 'history' },
    { href: '/profile', label: '내정보', icon: 'people' },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto">
        <ul className="flex justify-around items-center h-16">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const fillColor = isActive ? '#000000' : '#9CA3AF'; // 검은색 또는 회색

            return (
              <li key={item.href}>
                <Link 
                  href={item.href} 
                  className={`flex flex-col items-center ${
                    isActive ? 'text-black font-bold' : 'text-gray-400'
                  }`}
                >
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {item.icon === 'home' && (
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke={fillColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    )}
                    {item.icon === 'calendar' && (
                      <path d="M19 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM16 2v4M8 2v4M3 10h18" stroke={fillColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    )}
                    {item.icon === 'history' && (
                      <path d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke={fillColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    )}
                    {item.icon === 'people' && (
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" stroke={fillColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    )}
                  </svg>
                  <span className="text-xs mt-1">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}