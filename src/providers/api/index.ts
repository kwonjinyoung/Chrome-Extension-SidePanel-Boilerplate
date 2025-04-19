/**
 * 관련 기획서:
 * - /기획/ChromeAPI_기획.md
 * - /기획/프로젝트_메인기획.md
 * - /기획/API_연결_기획.md
 */
import type { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import axios from 'axios';
import type { IApiService } from './types';

// API base URL 설정
const API_BASE_URL =
  process.env.API_URL || 'bfc7adb7399190aa84ff30c25400175df.asuscomm.com:2692';

// axios 인스턴스 생성
const apiClient = axios.create({
  baseURL: `http://${API_BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10초
});

// 요청 인터셉터 - 요청 전 처리
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 요청 전에 처리할 작업 (토큰 추가 등)
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.set('Authorization', `Bearer ${token}`);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터 - 응답 후 처리
apiClient.interceptors.response.use(
  (response) => {
    // 응답 데이터 처리
    return response;
  },
  (error) => {
    // 오류 응답 처리
    if (error.response) {
      // 서버가 오류 응답을 반환한 경우
      console.error('API 오류:', error.response.status, error.response.data);

      // 401 Unauthorized 오류 처리 (토큰 만료 등)
      if (error.response.status === 401) {
        localStorage.removeItem('access_token');
        // 로그인 페이지로 리디렉션하거나 다른 처리
      }
    } else if (error.request) {
      // 요청은 되었지만 응답을 받지 못한 경우
      console.error('API 요청 오류:', error.request);
    } else {
      // 요청 설정 과정에서 오류가 발생한 경우
      console.error('API 설정 오류:', error.message);
    }

    return Promise.reject(error);
  }
);

// API 서비스 객체
const apiService: IApiService = {
  // GET 요청
  get: async <T>(url: string, params?: any): Promise<T> => {
    const response: AxiosResponse<T> = await apiClient.get(url, { params });
    return response.data;
  },

  // POST 요청
  post: async <T>(url: string, data?: any): Promise<T> => {
    const response: AxiosResponse<T> = await apiClient.post(url, data);
    return response.data;
  },

  // PUT 요청
  put: async <T>(url: string, data?: any): Promise<T> => {
    const response: AxiosResponse<T> = await apiClient.put(url, data);
    return response.data;
  },

  // DELETE 요청
  delete: async <T>(url: string): Promise<T> => {
    const response: AxiosResponse<T> = await apiClient.delete(url);
    return response.data;
  },
};

export default apiService;
