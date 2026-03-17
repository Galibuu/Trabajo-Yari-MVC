import {Router} from "express";
import {createTask, getTasks, updateTask, deleteTask} from "../controllers/taskController.js";  
const router = Router();

router.get("/task/getTasks/:team_id", getTasks)
router.post("/task/createTask", createTask)
router.put("/task/updateTask/:task_id", updateTask)
router.delete("/task/deleteTask/:task_id", deleteTask)

export default router;