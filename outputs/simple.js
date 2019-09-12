const util = require('util');
const levels = require('../levels');

// Precalculate each level logging options
const prefixes = Object.keys(levels).reduce((map, level) => {
	map[level] = levels[level].color(`${level}:`);
	return map;
}, {});

// Simple logging function
function log(level, message, context = '') {
	const prefix = prefixes[level] || '';
	const {colorAll, color} = levels[level];

	if (colorAll) {
		console.log(color(util.format(`${level}: ${message}`, context)));
	}
	else {
		console.log(`${prefix} ${message}`, context);
	}
}

module.exports = log;