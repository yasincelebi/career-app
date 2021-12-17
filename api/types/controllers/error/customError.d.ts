declare class CustomError {
    code: number;
    message: string;
    constructor(code: number, message: string);
    static badRequest(msg: string): CustomError;
    static internal(msg: string): CustomError;
}
export default CustomError;
