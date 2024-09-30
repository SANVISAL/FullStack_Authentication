import { StatusCode } from "./const/status-code";
import { HttpException } from "./http-acception";

export class ApiError extends HttpException {
  public constructor(
    message: string = "Unexpected error accurred.",
    statusCode: number = StatusCode.InternalServerError
  ) {
    super(message, statusCode);

    Object.setPrototypeOf(this, ApiError.prototype);
  }
}
