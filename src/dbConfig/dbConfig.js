import mongoose from "mongoose";

const connect = () => {
    try {
        mongoose.connect(process.env.MONGO_URL);
        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("MongoDB connected successfully");
        });

        connection.on("error", (err) => {
            console.log(
                "MongoDB connection error. Please make sure MongoDB is running. " +
                    err
            );
            process.exit();
        });
    } catch (error) {
        console.log("Something went wrong! Please try again later");
        console.log(error);
    }
};

export default connect;
