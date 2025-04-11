import jwt from 'jsonwebtoken';
import { User } from '../models/user.model.js';
import { ENV_VARS } from '../config/envVarse.js';

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies["jwt-nekoflix"]

        if (!token) {
            return res.status(401).json({ success: false, message: "Unauthorized - No Token Provided" });
        }
        const decoded = jwt.verify(token, ENV_VARS.JWT_SECRET);

        if (!decoded) {
            return res.status(401).json({ success: false, message: "Unauthorized - Invalid Token" });
        }

        const user = await User.findById(decoded.userId).select("-password");

        if (!user) {
            return res.status(401).json({ success: false, message: "Unauthorized - User Not Found" });
        }

        req.user = user; // Attach the user to the request object
        next();   

    } catch (error) {
        console.error("Error in protectRoute middleware:", error.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}