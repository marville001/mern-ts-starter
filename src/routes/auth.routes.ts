import { Router } from "express";
import { getAuthUserController, } from "../controllers/auth.controller";
import AuthMiddleware from "../middleware/auth.middleware";

const authRouter = Router();

authRouter.get("/me", AuthMiddleware, getAuthUserController);

export { authRouter };