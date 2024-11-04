import { NextFunction, Request, Response } from "express";
import AppError from "./AppError";

const globalErrorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  let status = 500;
  let message = err.message || "Something went wrong!";

  if (err instanceof AppError) {
    status = err.status;
    message = err.message;
  }

  return res.status(err?.status || status).json({
    success: false,
    message,
    errors: err,
    stack: err?.stack,
  });
};

export default globalErrorHandler;
