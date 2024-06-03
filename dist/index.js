"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getErrorMessage = void 0;
const errorTypeDescriptions = {
    Unknown: "An unknown error has occurred",
    ActionFailed: "The action has failed",
    ValueInvalid: "Value is invalid",
    ValueRequired: "Value is required",
    ValueTooLarge: "Value is too large",
    ValueTooSmall: "Value is too small",
    ValueUnknown: "Value is unknown",
    ServerError: "A server error occurred",
    TypeUnknown: "Type is unknown",
    Unauthorized: "Unauthorized access",
    Unavailable: "Resource is unavailable",
    Unhandled: "An unhandled error has occurred",
};
function get400ErrorMessage(response) {
    const { type, details } = response;
    const mainErrorMessage = errorTypeDescriptions[type] || "An error has occurred";
    const detailedMessages = details.map((detail) => {
        const [errorType, variable] = detail.split(":");
        const errorMessage = errorTypeDescriptions[errorType] || "An error has occurred";
        return `${errorMessage} for ${variable}.`;
    });
    return { errorTitle: mainErrorMessage, errorMessage: detailedMessages.join(" ") };
}
function getErrorMessage(statusCode, response) {
    switch (statusCode) {
        case 400:
            return get400ErrorMessage(response);
        case 404:
            return { errorTitle: "404", errorMessage: "Resource not found." };
        case 500:
            return { errorTitle: "500", errorMessage: "Internal server error." };
        default:
            return { errorTitle: "Error", errorMessage: "An unexpected error has occurred." };
    }
}
exports.getErrorMessage = getErrorMessage;
//# sourceMappingURL=index.js.map