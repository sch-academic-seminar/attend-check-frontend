import { User } from './entity';

// 기본 응답 구조
export interface ApiResponse<T = any> {
  message: string;
  code: string;
  status_code: number;
  data: T;
}


export interface LoginResponse {
  access: string;
  refresh: string;
  user: User;
}

// 타입 가드 함수
export function isApiResponse(response: any): response is ApiResponse {
  return (
    typeof response === 'object' &&
    response !== null &&
    'message' in response &&
    'code' in response &&
    'status_code' in response &&
    'data' in response
  );
}