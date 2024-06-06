import { RequestHandler } from "express";

const catchAsync = (fn: RequestHandler): RequestHandler => (req, res, next) => {
	Promise.resolve(fn(req, res, next)).catch((error) => {
		console.log(error);
		res.status(500).json({
			status: 500,
			message: "Failed to process request. Please try again later!",
			error: error.message,
		});
	});
};

export default catchAsync;