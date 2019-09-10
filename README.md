# logger

> Simple console logger that outputs json in prod and pretty messages on dev

## Usage
```sh
npm install --save @5app/logger
```

Then, generate a logger in your app and use it to log messages.

```javascript
const getLogger = require('@5app/logger');

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
const getLogger = require('@5app/logger');

// This logger will log dev-friendly messages
const logger = getLogger({
  simple: true,
});
```

### metadata

Metadata is an object containing service metadata like the release tag or the A/B testing experiment we are running.
This object will be added to each log entry when using the JSON mode.

Example:
```javascript
const getLogger = require('@5app/logger');

// This logger will add details about the current release and A/B experiment to every log line
const getLogger = require('@5app/logger');
const logger = getLogger({
  metadata: {
    release: '1.2.3',
    experiment: 12345,
  },
});
```
