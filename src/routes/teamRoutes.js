import {Router} from "express";
import {createTeam, addMember, getMembers} from "../controllers/teamController.js";

const router = Router();

router.post("/team/createTeam", createTeam)
router.post("/team/addMember/:team_id", addMember)
router.get("/team/getMembers/:team_id", getMembers)

export default router;