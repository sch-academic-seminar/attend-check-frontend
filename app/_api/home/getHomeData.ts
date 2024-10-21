import { ApiResponse, HomeResponseData } from "../../_types/api";
import axiosInstance from "../axiosInstance";

export const getHomeData = async (): Promise<HomeResponseData> => {
  try {
    // const response = await axiosInstance.post('/login', { username, password });
    const response = await axiosInstance.get<ApiResponse<HomeResponseData>>('accounts/home/');

    // 로컬 스토리지에 토큰 저장
    return response.data.data;

  } catch (error) {
    throw error;
  }
};