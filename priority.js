const levels = require('./levels');

function priority(level) {
	return levels[level] ? levels[level].priority : 0;
}

module.exports = priority;