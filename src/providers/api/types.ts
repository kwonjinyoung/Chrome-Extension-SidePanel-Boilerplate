/**
 * 관련 기획서:
 * - /기획/API_연결_기획.md
 */

// API 응답 공통 타입
export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
  success: boolean;
}

// API 에러 타입
export interface ApiError {
  code: string;
  message: string;
  details?: string;
}

// 페이지네이션 응답 타입
export interface PageResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// 페이지네이션 요청 파라미터
export interface PageParams {
  page?: number;
  pageSize?: number;
  sortBy?: string;
  order?: 'asc' | 'desc';
}

// API 서비스 인터페이스
export interface IApiService {
  get<T>(url: string, params?: any): Promise<T>;
  post<T>(url: string, data?: any): Promise<T>;
  put<T>(url: string, data?: any): Promise<T>;
  delete<T>(url: string): Promise<T>;
}
