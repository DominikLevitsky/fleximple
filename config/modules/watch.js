module.exports = {
	css: {
		files: ['<%= SRC_FOLDER %>/*.scss'],
		tasks: ['sass', 'postcss:dist', 'cssmin'],
		options: {
			spawn: false
		}
	}
}
