<<<<<<< HEAD
// app/_api/axios.ts
=======
// app/_api/axiosInstance.ts
>>>>>>> 28e2b78 (Initial commit or update project)
import axios, {
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from 'axios';
import { ApiResponse, isApiResponse } from '../_types/api';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request 인터셉터
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('accessToken');

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

// Response 인터셉터
axiosInstance.interceptors.response.use(
  (response: AxiosResponse<ApiResponse>): AxiosResponse<ApiResponse> => {
<<<<<<< HEAD
    if (isApiResponse(response.data)) {
      return response;
    }
    console.log(response.data);
=======
    console.log(response.data);
    if (isApiResponse(response.data)) {
      return response;
    }
>>>>>>> 28e2b78 (Initial commit or update project)
    throw new Error('API 응답 형식이 잘못되었습니다.');
  },
  (error: AxiosError) => {
    if (error.response && error.response.status === 401) {
      // 토큰 갱신 로직 또는 로그아웃 처리
    }
    return Promise.reject(error);
  }
);

<<<<<<< HEAD
export default axiosInstance;
=======

export default axiosInstance;
>>>>>>> 28e2b78 (Initial commit or update project)
