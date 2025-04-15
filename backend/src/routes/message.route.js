import express from 'express';
import { protectRoute } from '../middleware/auth.middleware.js';
import { getMessages, getUserForSidebar, sendMessage } from '../controllers/message.controller.js';

const route = express.Router();

route.get("/users", protectRoute, getUserForSidebar);
route.get("/:id", protectRoute, getMessages)
route.post("/send/:id", protectRoute, sendMessage)

export default route;