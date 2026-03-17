import {Router} from "express";
import {register, valLogin} from "../controllers/authController.js";

const router = Router();

router.post("/register", register);
router.post("/login", valLogin);

export default router