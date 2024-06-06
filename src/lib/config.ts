
export const CONFIG = {
	PORT: process.env.PORT || 9000,
	JWT_SECRET: process.env.JWT_SECRET || "myverysecuresecret",
	JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "1d",	
	DB_URI: process.env.DB_URI || "mongodb://localhost:27017/mydb",
}