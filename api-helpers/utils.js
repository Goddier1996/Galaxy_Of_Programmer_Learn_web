import mongoose from "mongoose";


export const connectToDatabase = async () => {

    if (mongoose.connection[0]) {
        return;
    }
    

    await mongoose.connect(
        // "mongodb+srv://artem:a54b25c46zx@cluster0.4o5vrid.mongodb.net/LearnWebSiteProgrammers"
        process.env.DB_HOST
    )
        .then(() => console.log("connect"))
        .catch((err) => console.log(err));
}