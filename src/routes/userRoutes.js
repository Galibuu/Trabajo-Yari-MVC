import {Router} from "express";
import {register, valLogin} from "../controllers/authController.js";

const router = Router();

router.post("/user/register", register);
router.post("/user/login", valLogin);

export default router;