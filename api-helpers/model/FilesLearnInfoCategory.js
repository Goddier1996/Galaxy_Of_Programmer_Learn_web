import mongoose from "mongoose";

const Schema = mongoose.Schema;

const categoriesSchema = new Schema({

    codeCategory: {
        type: String,
        required: true,
    },
    linkFIleLinkLearn: {
        type: String,
        required: true,
    },
    titleFIleLink: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    }

});

export default mongoose.models.filesLearnInfoCategory || mongoose.model("filesLearnInfoCategory", categoriesSchema);