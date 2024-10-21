
import { ApiResponse } from "../../_types/api";
import axiosInstance from "../axiosInstance";

export const attendProgram = async (programId: number): Promise<string> => {
  try {
    const response = await axiosInstance.post<ApiResponse<null>>(`/programs/${programId}/attend/`);
    // 로컬 스토리지에 토큰 저장
    return response.data.message;
  } catch (error) {
    console.error('참여 요청 실패:', error);
    throw error;
  }
};