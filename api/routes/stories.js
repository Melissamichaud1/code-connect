import express from "express";
import { getStories, addStory, deleteStory } from "../controllers/story.js";
import multer from "multer";

const router = express.Router();

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Store uploaded files in the 'uploads' folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Generate unique filenames
  },
});

// Initialize multer middleware with the specified configuration
const upload = multer({ storage: storage });

// Routes
router.get("/", getStories);
router.post("/add", upload.single("img"), addStory); // Use multer middleware to handle file uploads
router.delete("/:id", deleteStory);

export default router;
