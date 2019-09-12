const simple = require('./outputs/simple');
const json = require('./outputs/json');
const levels = require('./levels');
const priority = require('./priority');

const {LOGS_FORMAT, LOGS_LEVEL} = process.env;

const logger = LOGS_FORMAT === 'json' ? json : simple;
const minimumPriority = priority(LOGS_LEVEL || 'debug');

// eslint-disable-next-line no-empty-function
const noLog = () => {};

const methods = {};

Object.keys(levels).forEach(level => {
	methods[level] = priority(level) >= minimumPriority ? (message, context) => logger(level, message, context) : noLog;
});

module.exports = methods;