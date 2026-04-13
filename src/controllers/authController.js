import {pool} from "../db/dbconn.js"
import {USERQUERY} from "../models/userModel.js"
import bcrypt from "bcrypt"


export const getUsers = (req, res) =>{
    res.status(200).json({msj: "Ruta Pal Usuario"})
}


export const register = async (req, res, next)=>{
    try {
        const {name, email, password} = req.body

        if (!name || !email || !password) {
            return res.status(400).json({message: "Los campos name, email y password son obligatorios"})
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return res.status(400).json({message: "El formato del email no es válido"})
        }

        const hash = await bcrypt.hash(password, 10)

        await pool.query(USERQUERY.CREATE, [name, email, hash]);
        res.status(201).json({
            message: "Usuario creado",
            data: "Usuario creado boeeee"
        })
    } catch (error) {
        next(error)
    }
}

export const valLogin = async (req, res, next)=>{
    try {
        const {email, password} = req.body

        if (!email || !password) {
            return res.status(400).json({message: "Los campos email y password son obligatorios"})
        }

        const user = await pool.query(USERQUERY.GETEMAIL, [email]);
        if (user.rows.length === 0) {
            return res.status(401).json({message: "Credenciales inválidas"});
        }

        const storedPasswordResult = await pool.query(USERQUERY.GETPASSWORD, [email]);
        if (storedPasswordResult.rows.length === 0) {
            return res.status(401).json({message: "Credenciales inválidas"});
        }

        const storedPassword = storedPasswordResult.rows[0].password
        const isMatch = await bcrypt.compare(password, storedPassword);
        if (!isMatch) return res.status(401).json({message: "Credenciales inválidas"});

        return res.status(200).json({message: "Inicio de sesión valido"})
    } catch (error) {
        next(error)
    }
}
