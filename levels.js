const chalk = require('chalk');

const levels = {
	error: {priority: 4, color: chalk.red},
	warn: {priority: 3, color: chalk.yellow},
	info: {priority: 2, color: chalk.green},
	debug: {priority: 1, color: chalk.grey, colorAll: true}
};

module.exports = levels;