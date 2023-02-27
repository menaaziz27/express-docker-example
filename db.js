import mongoose from "mongoose";

const connectDB = async() => {
    try {
        const conn = await mongoose.connect("mongodb://mongo/docker-test");

        console.log(`MongoDB connected on ${conn.connection.host}`);
    } catch (e) {
        console.log(`Error: ${e.message}`);
    }
};

export default connectDB;