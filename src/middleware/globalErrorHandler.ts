import { NextFunction, Request, Response } from "express";
import { IError } from "../lib/app-error";

const globalErrorHandler = (err: IError, req: Request, res: Response, next: NextFunction) => {

  res.status(err.statusCode || 500).json({
    success: false,
    status: err.status || 'error',
    error: err.name,
    message: err.message,
    stack: err.stack,
  });
};

export default globalErrorHandler;