const devConfig = {
	port: process.env.PORT || 4000,
	database: 'mongodb://localhost/express-app-dev',
	secrets: {
		API_KEY: process.env.API_KEY
	}
}
export default devConfig
