import mongoose from "mongoose";

const Schema = mongoose.Schema;

const categoriesSchema = new Schema({

    image: {
        type: String,
        required: true,
    },
    codeCategory: {
        type: String,
        required: true,
    },
    aboutCategory: {
        type: String,
        required: true,
    },
    usedFor: {
        type: String,
        required: true,
    },
    whyUse: {
        type: String,
        required: true,
    },
    imageLanguage: {
        type: String,
        required: true,
    },

});


export default mongoose.models.aboutCategory || mongoose.model("aboutCategory", categoriesSchema)