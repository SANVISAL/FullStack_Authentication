import { HttpException } from "../utils/http-acception";
import { StatusCode } from "../utils/const/status-code";
import { ErrorResponse } from "../utils/respones";
import { NextFunction, Request, Response } from "express";

export const exceptionHandler = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (error instanceof HttpException) {
    const statusCode = error.getStatusCode();

    return res
      .status(statusCode)
      .json(new ErrorResponse(`${statusCode}`, error.message));
  } else {
    return res
      .status(StatusCode.InternalServerError)
      .json(
        new ErrorResponse(
          `${StatusCode.InternalServerError}`,
          "Internal Server Error."
        )
      );
  }
};
