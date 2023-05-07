import mongoose from "mongoose";

const Schema = mongoose.Schema;

const categoriesSchema = new Schema({


    codeCategory: {
        type: String,
        required: true,
    },
    linkWebSiteLearn: {
        type: String,
        required: true,
    },
    titlelinkWebSite: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    }

});


export default mongoose.models.linkInfoLearnCategory || mongoose.model("linkInfoLearnCategory", categoriesSchema)