import mongoose from "mongoose";


export const connectToDatabase = async () => {

    if (mongoose.connection[0]) {
        return;
    }

    await mongoose.connect(
        process.env.DB_HOST
    )
        .then(() => console.log("connect"))
        .catch((err) => console.log(err));
}