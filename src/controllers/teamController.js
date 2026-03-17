import {pool} from "../db/dbconn.js"
import {TEAMQUERY} from "../models/teamModel.js"

export const createTeam = async (req, res, next) => {
    const {name} = req.body
    const result = await pool.query(TEAMQUERY.CREATE, [name])
    res.status(201).json({
        message: "Equipo creado",
        data: result.rows[0]
    })
}

export const addMember = async (req, res, next) => {
    const {team_id, user_id} = req.body
    await pool.query(TEAMQUERY.ADDMEMBER, [team_id, user_id])  
    res.status(200).json({
        message: "Miembro agregado al equipo"
    })
}

export const getMembers = async (req, res, next) => {
    const {team_id} = req.params
    const result = await pool.query(TEAMQUERY.GETMEMBERS, [team_id])
    res.status(200).json({
        message: "Miembros del equipo",
        data: result.rows
    })
}