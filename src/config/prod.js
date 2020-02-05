const prodConfig = {
	port: process.env.PORT || 8088,
	database: process.env.DATABASE,
	secrets: {
		API_KEY: process.env.API_KEY
	}
}
export default prodConfig
