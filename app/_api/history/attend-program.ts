
import axiosInstance from '../axiosInstance'; // 커스텀 axios 인스턴스 사용

interface AttendResponse {
  message: string;
}

export const attendProgram = async (programId: number, username: string, password: string): Promise<AttendResponse> => {
  try {
    const response = await axiosInstance.post<AttendResponse>(`/programs/${programId}/attend/`, {
      username,
      password,
    });

    return response.data; // 성공 시 응답 데이터 반환
  } catch (error) {
    console.error('참여 요청 실패:', error);
    throw error; // 에러를 상위 컴포넌트로 전달
  }
};
