import mysql from 'mysql2/promise';

const requiredEnv = ['MYSQL_HOST', 'MYSQL_PORT', 'MYSQL_USER', 'MYSQL_PASSWORD', 'MYSQL_DATABASE'];
let pool;
let schemaReadyPromise;

function getPool() {
  if (!pool) {
    requiredEnv.forEach((key) => {
      if (!process.env[key]) {
        throw new Error(`Missing required environment variable: ${key}`);
      }
    });

    pool = mysql.createPool({
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT),
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  }

  return pool;
}

export async function query(sql, params = []) {
  const [rows] = await getPool().execute(sql, params);
  return rows;
}

export async function createUsersTable() {
  await query(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100),
      username VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(100) NOT NULL
    )
  `);

  const nameColumn = await query(
    `
      SELECT COLUMN_NAME
      FROM INFORMATION_SCHEMA.COLUMNS
      WHERE TABLE_SCHEMA = ?
        AND TABLE_NAME = 'users'
        AND COLUMN_NAME = 'name'
      LIMIT 1
    `,
    [process.env.MYSQL_DATABASE]
  );

  if (nameColumn.length === 0) {
    await query('ALTER TABLE users ADD COLUMN name VARCHAR(100) NULL AFTER id');
  }
}

export async function ensureSchema() {
  if (!schemaReadyPromise) {
    schemaReadyPromise = createUsersTable();
  }
  await schemaReadyPromise;
}

export async function execute(sql, params = []) {
  return getPool().execute(sql, params);
}
