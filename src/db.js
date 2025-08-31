import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT || 5432),
  user: process.env.DB_USER || "app",
  password: process.env.DB_PASSWORD || "app",
  database: process.env.DB_NAME || "app"
});

export async function getMessages() {
  const { rows } = await pool.query("SELECT id, text FROM messages ORDER BY id ASC");
  return rows;
}
