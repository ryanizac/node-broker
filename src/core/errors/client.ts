export class ClientError extends Error {
  public readonly code: number;

  constructor(message: string, code: number = 400) {
    super(message);
    this.code = code;
  }
}
