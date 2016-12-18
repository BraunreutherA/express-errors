# yaeeh - yet another express error handler

A small library for error handling in express. With Default Api-Errors predefined.

### Installation

`$ npm install --save yaeeh`

### API

``` javascript
/**
 * NotImplementedError
 *
 * default status code: 501
 * default error code: ERR_NOT_IMPLEMENTED
 * default message: This resource is not implemented yet.
 */

const error = new NotImplementedError();
```

### Development

## TODOs
- [ ] add more Errors
- [x] export responses for test via supertest for example

## License

MIT © [Alexander Braunreuther](https://github.com/BraunreutherA)
