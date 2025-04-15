import { signup, login, logout, updateProfile, checkAuth } from '../controllers/auth.controller.js';
import express, { Router } from 'express';
import { protectRoute } from '../middleware/auth.middleware.js';

const route = express.Router();

route.post("/signup", signup)

route.post("/login", login)

route.post("/logout", logout)

route.put("/update-profile", protectRoute, updateProfile )

route.get("/check", protectRoute, checkAuth)

export default route;