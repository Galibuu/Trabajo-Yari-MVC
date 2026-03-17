import {Router} from "express";
import {createTeam, addMember, getMembers} from "../controllers/teamController.js";

const router = Router();

router.post("/nuevoEquipo", createTeam)
router.post("/agregarMiembro/:team_id", addMember)
router.get("/obtenerMiembros/:team_id", getMembers)

export default router