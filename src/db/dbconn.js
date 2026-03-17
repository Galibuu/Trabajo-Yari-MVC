import pg from 'pg'

const { Pool } = pg

export const pool = new Pool({
  connectionString: process.env.DBHOST
})

export const DBConnection = async () => {
  try {
    await pool.connect()
    console.log("DATABASE CONNECTED")
  } catch (err) {
    console.log(err)
  }
}