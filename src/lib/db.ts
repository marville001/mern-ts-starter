import mongoose from "mongoose";
import Logger from "../logger";
import { CONFIG } from "./config";

const connectToDb = async () => {
	try {
		await mongoose.connect(CONFIG.DB_URI);
		Logger.info(`🚀 Db connection successfull`);
	} catch (error: any) {
		Logger.error(`Failed to connect to db: ${error.message}`);
		process.exit(1);
	}
};

export default connectToDb;