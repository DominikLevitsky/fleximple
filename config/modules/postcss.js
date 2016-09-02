module.exports = {
	options: {
		map: true,
		processors: [
			require('autoprefixer')({
				browsers: 'last 10 versions',
				failOnError: true
			})
		]
	},
	dist: {
		files:{
			'./build/fleximple.css' : './build/fleximple.css'
		}
	}
}
