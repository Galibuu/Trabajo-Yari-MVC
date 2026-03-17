import {pool} from "../db/dbconn.js"
import {TEAMQUERY} from "../models/teamModel.js"

export const createTeam = async (req, res, next) => {
    const {name} = req.body
}