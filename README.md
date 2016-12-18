# yaeeh - yet another express error handler

A small library for error handling in express. With Default Api-Errors predefined.

### Installation

`$ npm install --save yaeeh`

### Development

## API

Error are classes which inherit from the javascript standard error. Stacktrace etc is given as normal.

### Error(message, code)

Every error can be instantiated with a custom message and a custom error code like 'ERR_CUSTOM_ERROR_CODE'. The http number  codes are fixed to the standard http codes.

``` javascript
/**
 * NotImplementedError
 *
 * default status code: 501
 * default error code: ERR_NOT_IMPLEMENTED
 * default message: This resource is not implemented yet.
 */
const notImplementedError = new NotImplementedError();

/**
 * UnauthorizedError
 *
 * default status code: 401
 * default error code: ERR_NOT_AUTHORIZED
 * default message: You are not authorized to access this resource.
 */
const unauthorizedError = new UnauthorizedError(/* message */, /* code */);
```

## TODOs
- [ ] add more Errors
- [x] export responses for test via supertest for example

## License

MIT © [Alexander Braunreuther](https://github.com/BraunreutherA)
