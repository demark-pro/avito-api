export class AvitoError extends Error {
    public response: Response;

    constructor(message: string, response: Response) {
        super(message);
        this.response = response;
    }
}

export class AvitoApiError extends AvitoError {
    public code: number;
    public message: string;

    constructor(
        code: number,
        message: string,
        response: Response,
    ) {
        super(message, response);
        this.code = code;
        this.message = message;
    }
}