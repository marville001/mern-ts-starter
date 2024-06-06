import ApiError from "../lib/app-error";
import catchAsync from "../lib/catchAsync";
import signToken from "../lib/signToken";
import User from "../models/user.model";

export const getAuthUserController = catchAsync(async (req: any, res, next) => {
	const { id } = req.user;

	let user = await User.findOne({ _id: id });

	if (!user) return next( new ApiError(`Invalid Token`, 400) );

	const auth_token = signToken({ id: user.id, email: user.email, role: user.role });

	res.send({
		status: 200,
		success: true,
		data: { token: auth_token, user }
	});

});
