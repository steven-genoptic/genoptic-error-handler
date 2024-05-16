### Genoptic Error Handler

This is a test repository for error handling. We want to eventually use this repository to have shared error handling functions between the LED and Solar apps.

### Usage

To use this package, run `npm install genoptic-error-handler`<br />
Then, you can import the function by using `import { getErrorMessage } from "genoptic-error-handler";`

#### Example Usage

`console.log(getErrorMessage(error));`, where `error` is the HTTP response as a number
