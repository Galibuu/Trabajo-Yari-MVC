import {pool} from "../db/dbconn.js"
import {USERQUERY} from "../models/userModel.js"
import bcrypt from "bcrypt"


export const getUsers = (req, res) =>{
    res.status(200).json({msj: "Ruta Pal Usuario"})
}


export const register = async (req, res,next)=>{
const user = req.body
    const hash = await bcrypt.hash(user.password, 10)

    await pool.query(USERQUERY.CREATE,[user.name,user.email,hash]);
    res.status(201).json({
        message: "Usuario creado",
        data: "Usuario creado exitosamente"
    })
    console.log("datos enviados")

}

export const valLogin = async (req, res, next)=>{
    const {email, password} = req.body  
    const user = await pool.query(USERQUERY.GETEMAIL, [email]);
    if (!user) return res.status(401).json({ message: "Credenciales inválidas" });

    const storedPassword = await pool.query(USERQUERY.GETPASSWORD, [email]);
    const isMatch = await bcrypt.compare(password, storedPassword);
    if (!isMatch) return res.status(401).json({ message: "Credenciales inválidas" });

    return res.json({message : "Inicio se sesión valido"})

}