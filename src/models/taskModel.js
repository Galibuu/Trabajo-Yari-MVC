export const TASKQUERY = {
    CREATE: "INSERT INTO tasks (title, description, status, assigned_to, team_id) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    GETALL: "SELECT * FROM tasks WHERE team_id = $1",
    UPDATE: "UPDATE tasks SET title = COALESCE($1, title), description = COALESCE($2, description), status = COALESCE($3, status) WHERE id = $4 RETURNING *",
    DELETE: "DELETE FROM tasks WHERE id = $1"
}