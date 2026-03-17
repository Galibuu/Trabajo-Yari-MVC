export const TASKQUERY = {
    CREATE: "INSERT INTO tasks (title, description, status, team_id) VALUES ($1, $2, $3, $4) RETURNING *",
    GETALL: "SELECT * FROM tasks WHERE team_id = $1",
    UPDATE: "UPDATE tasks SET title = $1, description = $2, status = $3 WHERE id = $4 RETURNING *",
    DELETE: "DELETE FROM tasks WHERE id = $1"
}