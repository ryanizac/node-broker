export type Socket = {
  query: any;
  disconnect(error?: string): void;
  emit<T extends object>(topic: string, data: T): void;
};
