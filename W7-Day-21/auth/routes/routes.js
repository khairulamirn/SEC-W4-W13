import healthController from "../controllers/health.js";
import authController from "../controllers/auth.js";
import { Router } from "express";

const router = Router();

router.get("/health", healthController.getHealth);
router.post("/health", healthController.postHealth);
router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);

export default router;