import { Document, Model, Schema, model, models } from "mongoose";

interface UserDocument extends Document {
	name: string;
	email: string;
	role: string;
	avatar: string;
}

interface Methods {
}

const UserSchema = new Schema<UserDocument, {}, Methods>({
	email: { type: String, unique: true, required: true, },
	name: { type: String, trim: true, required: true },
	role: {
		type: String,
		default: "user",
	},
	avatar: String,
}, { timestamps: true });

const User = models.User || model("User", UserSchema);

export default User as Model<UserDocument, {}, Methods>;