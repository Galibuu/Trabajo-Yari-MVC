import {Router} from "express";

const router = Router();

router.get("/task/getTasks")
router.post("/task/createTask")
router.put("/task/updateTask/:task_id")
router.delete("/task/deleteTask/:task_id")

export default router;