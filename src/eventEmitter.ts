/**
 * 관련 기획서:
 * - /기획/프로젝트_메인기획.md
 */
import type { AxiosRequestHeaders } from 'axios';
import EventEmitter from 'eventemitter3';

export const enum EventType {
  Error = 'error',
}

export interface ErrorArgs {
  code: number;
  message: string;
  headers?: AxiosRequestHeaders;
}

const eventEmitter = new EventEmitter();

export default eventEmitter;
