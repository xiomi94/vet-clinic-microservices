export interface DefaultResponseMessage<T = unknown> {
  status: 'ok' | 'error';
  message: string;
  data?: T;
}