// pages/api/users.js

import { query } from '../../lib/db';
import { Pool } from 'pg';

// export default async function handler(req, res) {
//   try {
//     const { rows } = await query('SELECT * FROM users;');
//     res.status(200).json(rows);
//   } catch (error) {
//     console.error('Database query failed:', error);
//     res.status(500).json({ error: 'Failed to fetch data' });
//   }
// }

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

export default async function handler(req, res) {
    const result = await pool.query('SELECT * FROM your_table');
    res.status(200).json(result.rows);
}
