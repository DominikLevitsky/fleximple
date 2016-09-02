module.exports = {
	task: {
		options: {
			style: 'expanded',
			noCache: true
		},
		files: {
			"<%= DIST_FOLDER %>/fleximple.css": "<%= SRC_FOLDER %>/fleximple.scss"
		}
	}
}
