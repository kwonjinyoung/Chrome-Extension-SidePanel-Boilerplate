/**
 * 관련 기획서:
 * - /기획/UI컴포넌트_기획.md
 * - /기획/프로젝트_메인기획.md
 */
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
