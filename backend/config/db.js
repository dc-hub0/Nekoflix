import mongoose from "mongoose";
import { ENV_VARS } from "./envVarse.js";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(ENV_VARS.MONGO_URI)
        console.log("MongoDB connected successfully: " + conn.connection.host);
    } catch (error) {
        console.error("MongoDB connection failed", +error.message);
        process.exit(1); // Exit process with failure
    }
}

