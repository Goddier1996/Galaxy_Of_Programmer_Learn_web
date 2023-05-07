import mongoose from "mongoose";

const Schema = mongoose.Schema;

const categoriesSchema = new Schema({


    codeCategory: {
        type: String,
        required: true,
    },
    video: {
        type: String,
        required: true,
    },
    titleVideo: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    }

});


export default mongoose.models.videoLearnInfoCategory || mongoose.model("videoLearnInfoCategory", categoriesSchema)