import mongoose from "mongoose";

const Schema = mongoose.Schema;

const categoriesSchema = new Schema({

    image: {
        type: String,
        required: true,
    }

});

export default mongoose.models.categories || mongoose.model("categories", categoriesSchema);