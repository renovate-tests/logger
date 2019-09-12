const getLogger = require('./getLogger');

const {
	LOGS_FORMAT,
	LOGS_LEVEL,
	TAG
} = process.env;

const logger = getLogger({
	simple: LOGS_FORMAT !== 'json',
	level: LOGS_LEVEL || 'debug',
	metadata: {
		tag: TAG
	}
});

module.exports = {
	logger,
	getLogger
};
