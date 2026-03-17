export const TEAMQUERY = {
    CREATE: "INSERT INTO teams (name) VALUES ($1) RETURNING *",
    ADDMEMBER: "INSERT INTO team_members (team_id, user_id) VALUES ($1, $2)",
    GETMEMBERS: "SELECT u.name FROM users u JOIN team_members tm ON u.id = tm.user_id WHERE tm.team_id = $1"
}