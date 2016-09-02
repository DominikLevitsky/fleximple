module.exports = function(grunt) {

	function loadConfig(path) {
		var glob = require('glob');
		var object = {};
		var key;

		glob.sync('*', {cwd: path}).forEach(function(option) {
			key = option.replace(/\.js$/,'');
			object[key] = require(path + option);
		});

		return object;
	}

	var path = "";
	var dest = grunt.option('dest') || "dev";

	if (dest == "production") { path = "./production"; }
	else { path = "./dev"; }

	var config = {
		pkg: grunt.file.readJSON('package.json'),

		//Destination of our production and development builds.
		SRC_FOLDER: "./src",
		DIST_FOLDER: "./build",
		TARGET_FOLDER: path
	}

	grunt.initConfig(config);
	grunt.util._.extend(config, loadConfig('./config/modules/'));
	require('load-grunt-tasks')(grunt);

	grunt.registerTask('dev', ['sass', 'postcss:dist', 'cssmin']);

	grunt.registerTask('default', ['dev']);

};
