import { ApiResponse, LoginResponseData } from "../../_types/api";
import axiosInstance from "../axiosInstance";
import { setAccessToken, setRefreshToken  } from "../../_utils/authUtils";

export const login = async (username: string, password: string): Promise<LoginResponseData> => {
  try {
    const response = await axiosInstance.post<ApiResponse<LoginResponseData>>('accounts/login/', { username, password });

    // 로컬 스토리지에 토큰 저장
    setAccessToken(response.data.data.access);
    setRefreshToken(response.data.data.refresh);
    return response.data.data;

  } catch (error) {
    throw error;
  }
};