import mongoose from "mongoose";

const connection = {};

const connectMongoDB = async () => {
    if (connection.isConnected) {
        console.log("Using existing connection");
        return;
    }
    try {
        const db = await mongoose.connect(process.env.MONGO_URI);

        console.log("Connected to MongoDB");
        connection.isConnected = db.connections[0].readyState;
    } catch (error) {
        console.error("Error occurred connecting to MongoDB", error.message);
    }
};

export default connectMongoDB;
