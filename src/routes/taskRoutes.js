import {Router} from "express";

const router = Router();

router.get("/listaTareas")
router.post("/crearTarea")
router.put("/actualizarTarea")
router.delete("/eliminarTarea")

export default router