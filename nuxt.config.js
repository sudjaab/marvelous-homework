module.exports = {
	components: true,
	modules: ['@nuxtjs/axios'],

	axios: {},
	buildModules: ['@nuxt/postcss8'],
	build: {
		postcss: {
			plugins: {
				tailwindcss: {},
				autoprefixer: {}
			}
		}
	},
	css: ['@/assets/css/main.css'],
	head: {
		title: 'Marvelous Homework',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' }
		]
	}
}
