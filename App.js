import express from "express"
import { DBConnection } from "./src/db/dbconn.js"
import  userRoutes from "./src/routes/userRoutes.js"
// import  taskRoutes from "./src/routes/taskRoutes.js"
// import  teamRoutes from "./src/routes/teamRoutes.js"


const app = express()
const PORT = process.env.PORT

app.use(express.json())


app.use("/user", userRoutes)
// app.use("/task", taskRoutes)
// app.use("/team", teamRoutes)

app.listen(PORT, () =>{
    console.log("Server iniciado en " + PORT)
    DBConnection()
})