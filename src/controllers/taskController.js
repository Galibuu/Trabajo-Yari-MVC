import {pool} from "../db/dbconn.js"
import {TASKQUERY} from "../models/taskModel.js"

export const createTask = async (req, res, next) => {
    try {
        const {title, description, status, assigned_to, team_id} = req.body

        if (!title || !status || !team_id) {
            return res.status(400).json({message: "Los campos title, status y team_id son obligatorios"})
        }

        const result = await pool.query(TASKQUERY.CREATE, [title, description, status, assigned_to, team_id])
        res.status(201).json({
            message: "Tarea creada",
            data: result.rows[0]
        })
    } catch (error) {
        next(error)
    }
}

export const getTasks = async (req, res, next) => {
    try {
        const {team_id} = req.params

        if (!team_id || isNaN(Number(team_id))) {
            return res.status(400).json({message: "El parámetro team_id debe ser un número válido"})
        }

        const result = await pool.query(TASKQUERY.GETALL, [team_id])
        res.status(200).json({
            message: "Tareas listadas",
            data: result.rows
        })
    } catch (error) {
        next(error)
    }
}

export const updateTask = async (req, res, next) => {
    try {
        const {task_id} = req.params
        const {title, description, status} = req.body

        if (!task_id || isNaN(Number(task_id))) {
            return res.status(400).json({message: "El parámetro task_id debe ser un número válido"})
        }

        const result = await pool.query(TASKQUERY.UPDATE, [title, description, status, task_id])

        if (result.rowCount === 0) {
            return res.status(404).json({message: "Tarea no encontrada"})
        }

        res.status(200).json({
            message: "Tarea actualizada",
            data: result.rows[0]
        })
    } catch (error) {
        next(error)
    }
}

export const deleteTask = async (req, res, next) => {
    try {
        const {task_id} = req.params

        if (!task_id || isNaN(Number(task_id))) {
            return res.status(400).json({message: "El parámetro task_id debe ser un número válido"})
        }

        const result = await pool.query(TASKQUERY.DELETE, [task_id])

        if (result.rowCount === 0) {
            return res.status(404).json({message: "Tarea no encontrada"})
        }

        res.status(200).json({
            message: "Tarea eliminada"
        })
    } catch (error) {
        next(error)
    }
}
