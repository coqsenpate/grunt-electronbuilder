'use strict'

module.exports = function(grunt) {
	grunt.registerMultiTask(
		'electronpackager',
		'Package Electron apps',
		async function () {
			const done = this.async()
			const options = this.options()
			grunt.verbose.writeln('Using configuration:',options);

			const packager = options.packagerInstance

			if (!packager) {
				grunt.fatal('Packager instance has not been provided.')
				return
			}

			await packager(options)
			grunt.log.ok('Electron-packager complete.');
			done()
		}
	);
};
