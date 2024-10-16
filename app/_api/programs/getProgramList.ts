import { ApiResponse, ProgramResponseData } from "../../_types/api";
import axiosInstance from "../axiosInstance";

export const getProgramListData = async (): Promise<ProgramResponseData[]> => {
  try {
    // const response = await axiosInstance.post('/login', { username, password });
    const response = await axiosInstance.get<ApiResponse<ProgramResponseData[]>>('programs/');

    // 로컬 스토리지에 토큰 저장
    console.log(response.data.data);
    return response.data.data;

  } catch (error) {
    throw error;
  }
};