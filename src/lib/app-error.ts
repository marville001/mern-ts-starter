export interface IError {
  statusCode: number;
  stack: string;
  name: string;
  message: string;
  status: 'fail' | "error";
}

class ApiError extends Error {
  statusCode = 400;
  stack?: string | undefined = "";
  status = 'fail';

  constructor(message: string, statusCode: number, name = '', stack = '') {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    if (name) {
      this.name = name;
      if (stack) {
        this.stack = stack;
      } else {
        Error.captureStackTrace(this, this.constructor);
      }
    }
  }
}

export default ApiError;