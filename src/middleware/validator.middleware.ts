import { RequestHandler } from "express";
import { ObjectSchema } from "joi";

const ValidatorMiddleware = (schema: ObjectSchema, property: "body" | "query" | "params"): RequestHandler => (req, res, next) => {
	const { error } = schema.validate(req[property]);
	if (error)
		return res
			.status(400)
			.send({ success: false, message: error.details[0].message });

	next();
};

export default ValidatorMiddleware;