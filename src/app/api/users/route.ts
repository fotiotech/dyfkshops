import connection from "../db/db";
import User from "../models/userModel";
import express from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  const db = connection(); // Connect to MongoDB
  const users: { name: String; email: String; age: Number }[] = User.find(); // Fetch users from MongoDB
  res.json(users); // Send users as JSON response
});

// router.post("/", (req: Request, res: Response) => {
//   res.json({ message: "POST request to /api/users" });
// });

export default router;
