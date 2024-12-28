import { db } from "../connect.js";
export const searchUsers = (req, res) => {
  const { query } = req.query;
  // Updated to search by name
  const q = "SELECT id FROM users WHERE name LIKE ? LIMIT 1";

  db.query(q, [`%${query}%`], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length > 0) {
      return res.json(data[0]); // Return the first matching user's ID
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  });
};
