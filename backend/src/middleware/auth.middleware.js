import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

export const protectRoute = async (req, res, next) => {
   try {
      const token = req.cookies.jwt;
      if (!token) {
         return res.status(401).json({ msg: "Unauthorized: No token provided" });
      }

      let decoded;
      try {
         decoded = jwt.verify(token, process.env.JWT_SECRET);
      } catch (err) {
         return res.status(401).json({ msg: "Unauthorized: Invalid or expired token" });
      }

      const user = await User.findById(decoded.userId).select('-password');
      if (!user) {
         return res.status(401).json({ msg: "Unauthorized: User not found" });
      }

      req.user = user;
      next();
   } catch (error) {
      console.error("Error in protectRoute middleware:", error);
      res.status(500).json({ msg: "Server Error" });
   }
};
