# logger

> Simple console logger that outputs json in prod and pretty messages on dev

## Usage
```sh
npm install --save @5app/logger
```

```javascript
const logger = require('@5app/logger');

logger.info('An email was sent', {
  email: 'customer@5app.com',
  template: 'template1',
});

logger.error(new Error('Unknown playlist 123'));
```

## Options

The logger can optionally be customised using the following environment variables:

- `LOGS_FORMAT`: if set to `json`, the logger will log messages in json format instead of pretty messages (default behaviour).
- `LOGS_LEVEL`: minimum logging level, by default it will be `debug`. Accepted values are `'debug'`, `'info'`, `'warn'`, and `'error'`
- `TAG`: release tag (e.g. docker image tag) to be added to the log messages

## Logging levels

Logging levels are (from lower to higher priority): `'debug'`, `'info'`, `'warn'`, and `'error'`.
The logger provides the logging functions with the following signatures: `logger.<level>(message, objectOrError)`

Here is an example of how the logger can be used:
```
logger.error('An error happened', new ApiError('The api call failed', 404)); // will log the message, the error message, the stack trace, and the statusCode error property
logger.warn('Be warned', {a: 1, b: Date.now(), c: 'some string'});
logger.info('An event happened', {a: 1, b: Date.now(), c: 'some string'});
logger.debug('A minor operation', {a: 1, b: Date.now(), c: 'some string'});
```
