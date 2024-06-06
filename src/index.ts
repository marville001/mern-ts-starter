
import express from 'express';
import cors from "cors";
import * as dotenv from 'dotenv';
import { CONFIG } from "./lib/config";
import Logger from "./logger";
import globalErrorHandler from "./middleware/globalErrorHandler";
import connectToDb from "./lib/db";
import { authRouter } from "./routes/auth.routes";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/v1/auth", authRouter);

app.get("/status", (req, res) => {
	res.status(200).send({ message: "Server Status OK" });
});

app.all("*", (req, res, next) => {
	res.status(404).send({ status: 404, message: `Can't find ${req.originalUrl} on the server` });
});

app.use(globalErrorHandler);

app.listen(CONFIG.PORT, async () => {
	Logger.info(`🚀 App running on: http://localhost:${CONFIG.PORT}`);
	await connectToDb();
});