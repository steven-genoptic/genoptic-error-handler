type Exception = {
    type: string;
    details: string[];
    additional: string[];
};
type ErrorMessages = {
    errorTitle: string;
    errorMessage: string;
};
export declare function getErrorMessage(statusCode: number, response: Exception): ErrorMessages;
export {};
