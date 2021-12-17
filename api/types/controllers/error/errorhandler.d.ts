import { Request, Response } from 'express';
declare const apiErrorHandler: (err: {
    code: number;
    message: string;
}, _req: Request, res: Response) => any;
export default apiErrorHandler;
