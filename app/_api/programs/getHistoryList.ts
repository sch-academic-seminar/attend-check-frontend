import { ApiResponse, HistoryResponseData } from "../../_types/api";
import axiosInstance from "../axiosInstance";

export const getHistoryListData = async (): Promise<HistoryResponseData> => {
  try {
    // const response = await axiosInstance.post('/login', { username, password });
    const response = await axiosInstance.get<ApiResponse<HistoryResponseData>>('/programs/attend-history/');
    return response.data.data;

  } catch (error) {
    throw error;
  }
};  