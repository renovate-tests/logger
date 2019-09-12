# logger

> Simple console logger that outputs json in prod and pretty messages on dev

## Usage
```sh
npm install --save @5app/logger
```

Then, generate a logger in your app and use it to log messages.

```javascript
const {logger} = require('@5app/logger');

logger.info('An email was sent', {
  email: 'customer@5app.com',
  template: 'template1',
});

logger.error(new Error('Unknown playlist 123'));
```

Alternatively, you can create a new instance of logger where you can specify the metadata, logging level, and whether you want simple logs or not:

```javascript
const {getLogger} = require('@5app/logger');

const logger = getLogger({
  simple: process.env.NODE_ENV === 'development',
  metadata: {
    tag: process.env.TAG, // release tag, e.g. docker container tag
  },
});

logger.info('An email was sent', {
  email: 'customer@5app.com',
  template: 'template1',
});

logger.error(new Error('Unknown playlist 123'));
```

## Options

The logger generator accepts the following options:

### simple

This boolean value specifies whether we should log pretty dev-friendly messages instead of JSON or not.
By default, simple will be false.

Example:
```javascript
const {getLogger} = require('@5app/logger');

// This logger will log dev-friendly messages
const logger = getLogger({
  simple: true,
});
```

The default logger uses the environment variable `LOGS_FORMAT` to determine if the logs are going to be generated in json (`json`) or simple console logs (any other value other than `json`).

### metadata

Metadata is an object containing service metadata like the release tag or the A/B testing experiment we are running.
This object will be added to each log entry when using the JSON mode.

Example:
```javascript
const {getLogger} = require('@5app/logger');

// This logger will add details about the current release and A/B experiment to every log line
const logger = getLogger({
  metadata: {
    release: '1.2.3',
    experiment: 12345,
  },
});
```

### level

You can specify a minimum logging level using the `level` parameter or using the `LOGS_LEVEL` environment variable.
By default, the logging level will be [debug (npm)](https://github.com/winstonjs/winston#logging-levels).

Example:
```javascript
const {getLogger} = require('@5app/logger');

// This logger will add details about the current release and A/B experiment to every log line
const logger = getLogger({
  level: 'warn',
});

logger.info('this message will not be logged');
logger.warn('you will see this message');
```
