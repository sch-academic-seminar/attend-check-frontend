import { User } from './entity';

// 기본 응답 구조
export interface ApiResponse<T = any> {
  message: string;
  code: string;
  status_code: number;
  data: T;
}


export interface LoginResponseData {
  access: string;
  refresh: string;
  user: User;
}


export interface DepartmentRankingData {
  id: number;
  name: string;
  total_points: number;
  top_student: string;
  top_student_points: number;
}

export interface HomeResponseData {
  user_department_id: number;
  department_rankings: DepartmentRankingData[];
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