import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { getAccessToken, isTokenValid, removeToken } from '../_utils/authUtils';
import { useAuth } from '../_context/AuthContext';
import { me } from '../_api/auth/me';

export const useAutoLogin = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { user, setUser } = useAuth();

  useEffect(() => {
    const autoLogin = async () => {
      const token = getAccessToken();

      if (token && isTokenValid(token)) {
        try {
          const user = await me();
          setUser(user);

          // setUser(response.data.user);
          if (pathname === '/login' || pathname === '/signup') {
            router.push('/home');
          }
          else if (pathname === '/') {
            router.push('/home');
          }
          else {
            router.push(pathname);
          }
        } catch (error) {
          console.error('Auto login failed:', error);
          removeToken();
          router.push('/login');
        }
      } else {
        removeToken();
        // "Register 제외" 페이지에서는 로그인 페이지로 이동 (attend-history는 팝업 한번 띄워줘야해서 해당 페이지에서 로그인 핸들링)
        if (pathname !== '/register' && pathname !== '/attend-history'){
          router.push('/login');
        }
        else if (pathname === '/attend-history') {
          alert('로그인이 필요한 페이지입니다.');
          router.push('/login');
        }
      }
    };

    if (!user) {
      console.log('Auto login...');
      autoLogin();
    }
  }, [user, router, pathname]);

  return { isLoading: !user };
};