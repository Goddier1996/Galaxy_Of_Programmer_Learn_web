import mongoose from "mongoose";

const Schema = mongoose.Schema;

const favoriteSchema = new Schema({

    favorite: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    idUser: {
        type: String,
        required: true,
    },
    idFavorite: {
        type: String,
        required: true,
    }

})

export default mongoose.models.favoriteUsers || mongoose.model("favoriteUsers", favoriteSchema);