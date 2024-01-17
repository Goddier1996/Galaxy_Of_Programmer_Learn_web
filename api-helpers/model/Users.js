import mongoose from "mongoose";
const { ObjectId } = require("mongodb")

const Schema = mongoose.Schema;

const usersSchema = new Schema({

    _id: {
        type: ObjectId,
        required: true,
    },
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