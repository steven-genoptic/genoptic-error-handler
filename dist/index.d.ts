type Exception = {
  type: string;
  details: string[];
  additional: string[];
};

const errorTypeDescriptions: { [key: string]: string } = {
  Unknown: "An unknown error occurred",
  ActionFailed: "The action failed",
  ValueInvalid: "Value is invalid",
  ValueRequired: "Value is required",
  ValueTooLarge: "Value is too large",
  ValueTooSmall: "Value is too small",
  ValueUnknown: "Value is unknown",
  ServerError: "A server error occurred",
  TypeUnknown: "Type is unknown",
  Unauthorized: "Unauthorized access",
  Unhandled: "An unhandled error occurred",
};

function get400ErrorMessage(response: Exception): string {
  const { type, details } = response;

  const mainErrorMessage = errorTypeDescriptions[type] || "An error has occurred";

  const detailedMessages = details.map((detail) => {
    const [errorType, variable] = detail.split(":");
    const errorMessage = errorTypeDescriptions[errorType] || "An error has occurred";
    return `${errorMessage} for ${variable}.`;
  });

  return `${mainErrorMessage}. ${detailedMessages.join(" ")}`;
}

export function getErrorMessage(statusCode: number, response: Exception): string {
  switch (statusCode) {
    case 200:
      return "Success!";
    case 204:
      return "The resource you are trying to access does not exist or you do not have the necessary permissions to access this resource.";
    case 400:
      return get400ErrorMessage(response);
    case 404:
      return "Resource not found.";
    case 500:
      return "Internal server error.";
    default:
      return "An unexpected error has occurred.";
  }
}
