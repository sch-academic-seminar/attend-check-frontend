import { ApiResponse, LoginResponseData } from "../../_types/api";
import axiosInstance from "../axiosInstance";
import { setAccessToken, setRefreshToken  } from "../../_utils/authUtils";

export const register = async (username: string, name: string, password: string, selectedDepartmentId: number): Promise<LoginResponseData> => {
  const password1 = password;
  const password2 = password;
  const department_id = selectedDepartmentId;
  
  try {
    const response = await axiosInstance.post<ApiResponse<LoginResponseData>>('accounts/register/', { username, name, password1, password2, department_id });

    // 로컬 스토리지에 토큰 저장
    setAccessToken(response.data.data.access);
    setRefreshToken(response.data.data.refresh);
    return response.data.data;

  } catch (error) {
    throw error;
  }
};