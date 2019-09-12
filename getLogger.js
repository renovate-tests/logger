const winston = require('winston');

const LEVEL = Symbol.for('level');
const {format} = winston;
const sqlFormat = {
	level: winston.config.npm.levels.debug,
	color: 'grey'
};

winston.addColors({sql: sqlFormat.color});

const colorizer = format.colorize();
const sqlFormatter = format((info, opts) => {
	const level = info[LEVEL];

	if (opts.colorize && level === 'sql') {
		info.message = colorizer.colorize(level, `${info.message}\n`);
	}

	return info;
});

function getFormatter({simple}) {
	if (simple) {
		return format.combine(format.splat(), format.colorize(), sqlFormatter({colorize: true}), format.simple());
	}

	return format.combine(format.splat(), format.timestamp(), format.json());
}

function getLogger({simple, level, metadata}) {
	return winston.createLogger({
		level,
		levels: {
			...winston.config.npm.levels,
			sql: sqlFormat.level
		},
		format: getFormatter({simple}),
		defaultMeta: metadata,
		transports: [new winston.transports.Console()]
	});
}

module.exports = getLogger;