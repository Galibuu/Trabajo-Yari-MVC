export const USERQUERY = {
    CREATE: "INSERT INTO users (name, email, password) VALUES ($1,$2,$3) RETURNING *",
    GETEMAIL: "SELECT email FROM users WHERE email = $1",
    GETPASSWORD: "SELECT password FROM users WHERE email = $1"}