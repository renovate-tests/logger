const assert = require('assert');
const chalk = require('chalk');
const logger = require('..');

describe('Simple', () => {
	const write = process.stdout.write;
	let output;

	beforeEach(() => {
		output = '';
		process.stdout.write = str => {
			output += str;
		};
	});

	afterEach(() => {
		process.stdout.write = write;
	});

	it('should log messages to the standard output', () => {
		const testMessage = 'simple message';

		logger.info(testMessage);

		assert.equal(output.trim(), `${chalk.green('info:')} ${testMessage}`);
	});
});