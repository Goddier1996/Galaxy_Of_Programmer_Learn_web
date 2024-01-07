import mongoose from "mongoose";

const Schema = mongoose.Schema;

const usersSchema = new Schema({

    name: {
        type: String,
        required: true,
    },
    login: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    confirmPassword: {
        type: String,
        required: true,
    },
    avatarUser: {
        type: String,
        required: true,
    },

});

export default mongoose.models.users || mongoose.model("users", usersSchema);