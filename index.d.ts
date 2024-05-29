type Exception = {
    type: string;
    details: string[];
    additional: string[];
};
export declare function getErrorMessage(statusCode: number, response: Exception): string;
export {};
