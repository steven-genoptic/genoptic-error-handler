type Exception = {
  type: string;
  details: string[];
  additional: string[];
};

type ErrorMessages = {
  errorTitle: string;
  errorMessage: string;
};

const errorTypeDescriptions: { [key: string]: string } = {
  Unknown: "An unknown error has occurred",
  ActionFailed: "The action has failed",
  ValueInvalid: "Value is invalid",
  ValueRequired: "Value is required",
  ValueTooLarge: "Value is too large",
  ValueTooSmall: "Value is too small",
  ValueUnknown: "Value is unknown",
  ValueFound: "Value found",
  ValueNotFound: "Value not found",
  ServerError: "A server error has occurred",
  DeviceError: "A device error has occurred",
  TypeUnknown: "Type is unknown",
  Unauthorized: "Unauthorized access",
  Unavailable: "Resource is unavailable",
  Unhandled: "An unhandled error has occurred",
};

function get400ErrorMessage(response: Exception): ErrorMessages {
  const { type, details } = response;

  const mainErrorMessage = errorTypeDescriptions[type] || "An error has occurred";

  const detailedMessages = details.map((detail) => {
    const [errorType, variable] = detail.split(":");
    const errorMessage = errorTypeDescriptions[errorType] || "An error has occurred";
    return `${errorMessage} for ${variable}.`;
  });

  return { errorTitle: mainErrorMessage, errorMessage: detailedMessages.join(" ") };
}

export function getErrorMessage(statusCode: number, response: Exception): ErrorMessages {
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
