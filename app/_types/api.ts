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


export interface ProgramData {
  id: number;
  icon: string;
  name: string;
  is_regular: boolean;
  start_time_formatted: string; // 2024 11-05 00:00
  end_time_formatted: string; // 2024 11-05 00:00
  location: string;
  description: string;
  point_value: number;
}

export interface ProgramResponseData {
  title: string;
  data: ProgramData[];
}


export interface HistoryData {
  program_name: string;
  point_value: number;
  program_icon: string;
  point: number;
  last_point: number;
  after_point: number;
  attend_history_formatted: string;
}

export interface HistoryResponseData {
  total_point: number;
  attend_histories: HistoryData[];
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