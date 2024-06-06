import jwt from "jsonwebtoken";
import { CONFIG } from "./config";


interface JWT_DATA {
	id: string,
	email: string,
	role: string;
}

const signToken = (data: JWT_DATA) => {
	return jwt.sign(data, CONFIG.JWT_SECRET, {
		expiresIn: CONFIG.JWT_EXPIRES_IN,
	});
};

export default signToken;