## express-status-codes
Constants http status codes and functions for express.

## Installation
```console
# npm
npm install express-status-code
# yarn
yarn add express-status-code
```

## Example
```js
const { getStatusCode, StatusCodes, sendResponse } = require("express-status-code");

// const statusCode = getStatusCode("OK");
const statusCode = StatusCodes.OK;

sendResponse(response, statusCode, {
	message: "OK"
});
```

## License
[MIT License](LICENSE)