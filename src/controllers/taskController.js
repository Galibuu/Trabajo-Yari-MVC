import {pool} from "../db/dbconn.js"
import {TASKQUERY} from "../models/taskModel.js"

export const createTask = async (req, res, next) => {
    const {title, description, status, assigned_to, team_id} = req.body
    const result = await pool.query(TASKQUERY.CREATE, [title, description, status, assigned_to, team_id])
    res.status(201).json({
        message: "Tarea creada",
        data: result.rows[0]
    })
}

export const getTasks = async (req, res, next) => {
    const result = await pool.query(TASKQUERY.GETALL, [req.params.team_id])
    res.status(200).json({
        message: "Tareas listadas",
        data: result.rows
    })
}

export const updateTask = async (req, res, next) => {
    const {title, description, status} = req.body

    const result = await pool.query(TASKQUERY.UPDATE, [title, description, status, req.params.task_id])
    res.status(200).json({
        message: "Tarea actualizada",
        data: result.rows[0]
    })
}

export const deleteTask = async (req, res, next) => {
    const {task_id} = req.params
    await pool.query(TASKQUERY.DELETE, [task_id])
    res.status(200).json({
        message: "Tarea eliminada"
    })
}