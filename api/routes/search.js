import express from "express";
import { searchUsers } from "../controllers/search.js";

const router = express.Router();

// Define the search route with a more specific path
router.get("/search", searchUsers);

export default router;
