import healthController from "../controllers/health.js";
import authController from "../controllers/auth.js";
import { Router } from "express";
import privacyController from "../controllers/privacy.js";
import isAuth from "../middlewares/isAuth.js";

const router = Router();

router.get("/health", healthController.getHealth);
router.post("/health", healthController.postHealth);
router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);
router.get('/public', privacyController.publicPath);
router.get('/private', isAuth, privacyController.privatePath);

// todo routes
router.get("/todos", isAuth, listTodos);
router.post("/todos", isAuth, createTodo);
router.put("/todos/:id", isAuth, viewTodo);
router.delete("/todos/:id", isAuth, deleteTodo);

export default router;