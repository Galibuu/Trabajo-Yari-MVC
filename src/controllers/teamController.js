import {pool} from "../db/dbconn.js"
import {TEAMQUERY} from "../models/teamModel.js"

export const createTeam = async (req, res, next) => {
    try {
        const {name} = req.body

        if (!name) {
            return res.status(400).json({message: "El campo name es obligatorio"})
        }

        const result = await pool.query(TEAMQUERY.CREATE, [name])
        res.status(201).json({
            message: "Equipo creado",
            data: result.rows[0]
        })
    } catch (error) {
        next(error)
    }
}

export const addMember = async (req, res, next) => {
    try {
        const {team_id} = req.params
        const {user_id} = req.body

        if (!team_id || isNaN(Number(team_id))) {
            return res.status(400).json({message: "El parámetro team_id debe ser un número válido"})
        }

        if (!user_id) {
            return res.status(400).json({message: "El campo user_id es obligatorio"})
        }

        await pool.query(TEAMQUERY.ADDMEMBER, [team_id, user_id])
        res.status(201).json({
            message: "Miembro agregado al equipo"
        })
    } catch (error) {
        next(error)
    }
}

export const getMembers = async (req, res, next) => {
    try {
        const {team_id} = req.params

        if (!team_id || isNaN(Number(team_id))) {
            return res.status(400).json({message: "El parámetro team_id debe ser un número válido"})
        }

        const result = await pool.query(TEAMQUERY.GETMEMBERS, [team_id])
        res.status(200).json({
            message: "Miembros del equipo",
            data: result.rows
        })
    } catch (error) {
        next(error)
    }
}
