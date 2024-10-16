import { ApiResponse, LoginResponseData } from "../../_types/api";
import axiosInstance from "../axiosInstance";
import { User } from "../../_types/entity";

export const me = async (): Promise<User> => {
  try {
    const response = await axiosInstance.get<ApiResponse<User>>('accounts/me/');

    // 로컬 스토리지에 토큰 저장
    return response.data.data;

  } catch (error) {
    throw error;
  }
};