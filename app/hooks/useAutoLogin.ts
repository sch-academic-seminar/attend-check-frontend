import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { getAccessToken, isTokenValid, removeToken } from '../_utils/authUtils';
import { useAuth } from '../_context/AuthContext';
<<<<<<< HEAD
import axiosInstance from '../_api/axiosInstance';
=======
import { me } from '../_api/auth/me';
>>>>>>> 28e2b78 (Initial commit or update project)

export const useAutoLogin = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { user, setUser } = useAuth();

  useEffect(() => {
    const autoLogin = async () => {
      const token = getAccessToken();
<<<<<<< HEAD
      
      if (token && isTokenValid(token)) {
        try {
          // const response = await axiosInstance.get('/accounts/me/');
          // setUser(response.data.user);
          
          if (pathname === '/login' || pathname === '/signup') {
            router.push('/');
=======

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
>>>>>>> 28e2b78 (Initial commit or update project)
          }
        } catch (error) {
          console.error('Auto login failed:', error);
          removeToken();
          router.push('/login');
        }
<<<<<<< HEAD
      } else if (token) {
        removeToken();
        router.push('/login');
=======
      } else {
        removeToken();
        // "Register 제외" 페이지에서는 로그인 페이지로 이동
        if (pathname !== '/register')
          router.push('/login');
>>>>>>> 28e2b78 (Initial commit or update project)
      }
    };

    if (!user) {
<<<<<<< HEAD
=======
      console.log('Auto login...');
>>>>>>> 28e2b78 (Initial commit or update project)
      autoLogin();
    }
  }, [user, router, pathname]);

  return { isLoading: !user };
};