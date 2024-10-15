import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { getAccessToken, isTokenValid, removeToken } from '../_utils/authUtils';
import { useAuth } from '../_context/AuthContext';
import axiosInstance from '../_api/axiosInstance';

export const useAutoLogin = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { user, setUser } = useAuth();

  useEffect(() => {
    const autoLogin = async () => {
      const token = getAccessToken();
      
      if (token && isTokenValid(token)) {
        try {
          // const response = await axiosInstance.get('/accounts/me/');
          // setUser(response.data.user);
          
          if (pathname === '/login' || pathname === '/signup') {
            router.push('/');
          }
        } catch (error) {
          console.error('Auto login failed:', error);
          removeToken();
          router.push('/login');
        }
      } else if (token) {
        removeToken();
        router.push('/login');
      }
    };

    if (!user) {
      autoLogin();
    }
  }, [user, router, pathname]);

  return { isLoading: !user };
};