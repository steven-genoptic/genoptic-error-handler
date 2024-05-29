### Genoptic Error Handler

This is a test repository for error handling. We want to eventually use this repository to have shared error handling functions between the LED and Solar apps.

### Usage

To use this package, run `npm install genoptic-error-handler`<br />
Then, you can import the function by using `import { getErrorMessage } from "genoptic-error-handler";`

`getErrorMessage(statusCode: number, response: Exception)` accepts two arguments. <br />
`statusCode: number`: Represents the HTTP status code from the server. <br />
`response: Exception`: represents the object sent from the server upon recieving an error <br />

### Example Usage

```console.log(
  getErrorMessage(400, {
    type: "ActionFailed",
    details: ["ValueInvalid:Username", "ValueTooLarge:FirstName", "ValueRequired:Country"],
    additional: [],
  })
);

```

Output: `The action failed. Value is invalid for Username. Value is too large for FirstName. Value is required for Country.`

### How to push changes to NPM

**Required:** You must be logged in as steven-genoptic by using the command `npm login`, then logging in <br />

1. Make your changes within `/src/index.ts`
2. Save your changes, then run the command `tsc` in the root folder to compile the index.js
3. Copy the generated `index.js` from the root folder into the `index.js` within `/dist`
4. Copy the `index.ts` you just edited from the root folder into the `index.d.ts` within `/dist`
5. Update the version within `package.json`. This must be a higher version than before.
6. Run the command `npm publish` to publish this new file.

The package will be updated here: [npm/genoptic-error-handler](https://www.npmjs.com/package/genoptic-error-handler)
