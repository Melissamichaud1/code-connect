import express from "express";
const router = express.Router();

// Define logout route
router.get("/logout", (req, res) => {
  // Clear the user's session or cookies or perform any necessary logout operations
  // For example, if using sessions:
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
      res.status(500).send("Error logging out");
    } else {
      res.clearCookie("sessionID"); // Clear session cookie if using express-session
      res.status(200).send("Logout successful");
    }
  });
});

// Export the router
export default router;
