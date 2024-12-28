// // Importing necessary modules
// import express from "express";
// import multer from "multer";
// import path from "path";
// import { fileURLToPath } from "url";
// import { updateUser } from "../controllers/update.js"; // Adjust this import path as necessary

// // Calculate the directory name (__dirname) for the current module
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Setting up multer for file storage
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     // Points to the upload directory relative to this file's location
//     cb(null, path.join(__dirname, "../../../client/public/upload"));
//   },
//   filename: function (req, file, cb) {
//     // Naming the file - you can adjust this as needed
//     cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

// const router = express.Router();

// // Define the route for file uploads
// router.post(
//   "/", // Since this router is used with '/api/update', this effectively maps to '/api/update/'
//   upload.fields([
//     { name: "cover", maxCount: 1 }, // Expecting a 'cover' file
//     { name: "profile", maxCount: 1 }, // Expecting a 'profile' file
//   ]),
//   updateUser // The controller function to handle the request
// );

// // Export the router as default
// export default router;
