"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getErrorMessage = void 0;
function getErrorMessage(statusCode) {
    switch (statusCode) {
        case 200:
            return "Success!";
        case 404:
            return "Resource not found.";
        case 500:
            return "Internal server error.";
        default:
            return "An unexpected error has occurred.";
    }
}
exports.getErrorMessage = getErrorMessage;
