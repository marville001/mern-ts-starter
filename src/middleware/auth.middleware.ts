
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { CONFIG } from "../lib/config";

interface IUserRequest extends Request {
	user: any;
}

const AuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
	const bearerHeader = req.headers["authorization"];

	if (typeof bearerHeader === "undefined")
		return res.status(401).send({
			success: false,
			status: 401,
			message: "Access denied. No token provided",
			error: "AuthorizationError"
		});

	try {
		const token = req?.headers?.authorization?.split(" ")[1];
		const decoded = jwt.verify(token + "", CONFIG.JWT_SECRET);
		(req as IUserRequest).user = decoded;
		next();
	} catch (ex) {
		res.status(400).send({ success: false, status: 400, error: "AuthorizationError", message: "Invalid or expired token provided" });
	}

};

export default AuthMiddleware;
