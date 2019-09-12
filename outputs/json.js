const priority = require('../priority');

const {TAG: tag} = process.env;

function formatError(data) {
	if (data instanceof Error) {
		return {
			error: data.message,
			stacktrace: data.stack ? data.stack.split('\n').slice(1, 3)
				.map(line => line.trim()) : undefined,
			statusCode: data.statusCode
		};
	}

	return data;
}

function log(level, message, context = {}) {
	let contextObject = context;

	if (priority(level) >= priority('error')) {
		contextObject = formatError(context);
	}

	const payload = JSON.stringify({
		level,
		message,
		tag,
		timestamp: new Date().toISOString(),
		...contextObject
	});

	console.log(payload);
}

module.exports = log;