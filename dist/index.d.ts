export function getErrorMessage(statusCode: number): string {
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
