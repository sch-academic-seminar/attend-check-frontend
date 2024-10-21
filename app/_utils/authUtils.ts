// utils/authUtils.ts

export const setAccessToken = (token: string) => {
    localStorage.setItem('accessToken', token);
};

export const setRefreshToken = (token: string) => {
    localStorage.setItem('refreshToken', token);
}

export const getAccessToken = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('accessToken');
  }
  return null;
};

export const removeToken = () => {
<<<<<<< HEAD
  localStorage.removeItem('jwt_token');
=======
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
>>>>>>> 28e2b78 (Initial commit or update project)
};

export const isTokenValid = (token: string): boolean => {
  if (!token) return false;
  
  // JWT의 만료 시간 확인 로직
  const payload = JSON.parse(atob(token.split('.')[1]));
  const expirationTime = payload.exp * 1000; // JWT의 만료 시간은 초 단위
  console.log(expirationTime);
  return Date.now() < expirationTime;
};