import httpStatus from 'http-status';

class CustomError {
  code: number;

  message: string;

  constructor(code: number, message: string) {
    this.code = code;
    this.message = message;
  }

  static badRequest(msg: string): CustomError {
    return new CustomError(httpStatus.BAD_REQUEST, msg);
  }

  static internal(msg: string): CustomError {
    return new CustomError(httpStatus.INTERNAL_SERVER_ERROR, msg);
  }
}
export default CustomError;
