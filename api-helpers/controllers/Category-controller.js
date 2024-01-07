import ShowAllCategories from "../model/ShowAllCategories"
import ShowCategoryInfo from "../model/ShowCategoryInfo"
import VideoLearnInfoCategory from "../model/VideoLearnInfoCategory"
import LinkInfoLearnCategory from "../model/LinkInfoLearnCategory"
import FilesLearnInfoCategory from "../model/FilesLearnInfoCategory"



export const getAllCategories = async (req, res) => {

    let categories;

    try {
        categories = await ShowAllCategories.find();
    }
    catch (err) {
        return new Error(err)
    }

    if (!categories) {
        return res.status(500).json({ message: "Internal Server Error" })
    }

    if (categories.length == 0) {
        return res.status(404).json({ message: "No books found" })
    }

    return res.status(200).json({ categories });
};


export const getCategoryIdInfo = async (req, res) => {


    let id = req.query.id;

    let categoryId;

    try {
        categoryId = await ShowCategoryInfo.findOne({ codeCategory: id })

    } catch (err) {
        return new Error(err);
    }

    if (!categoryId) {
        return res.status(200).json({ message: "No book found given ID" })
    }


    return res.status(200).json({ categoryId });
};

export const getCategoryAllInfo = async (req, res) => {

    let categories;

    try {
        categories = await ShowCategoryInfo.find()
    }
    catch (err) {
        return new Error(err)
    }

    if (!categories) {
        return res.status(500).json({ message: "Internal Server Error" })
    }

    if (categories.length == 0) {
        return res.status(404).json({ message: "No books found" })
    }

    return res.status(200).json({ categories });
};


export const getCategoryIdInfoVideoLearn = async (req, res) => {


    let id = req.query.id;

    let categoryId;

    try {
        categoryId = await VideoLearnInfoCategory.find({ codeCategory: id })

    } catch (err) {
        return new Error(err);
    }

    if (!categoryId) {
        return res.status(200).json({ message: "No book found given ID" })
    }


    return res.status(200).json({ categoryId });
};

export const getCategoryAllInfoVideoLearn = async (req, res) => {

    let categories;

    try {
        categories = await VideoLearnInfoCategory.find()
    }
    catch (err) {
        return new Error(err)
    }

    if (!categories) {
        return res.status(500).json({ message: "Internal Server Error" })
    }

    if (categories.length == 0) {
        return res.status(404).json({ message: "No books found" })
    }

    return res.status(200).json({ categories });
};


export const getCategoryIdInfoLinkLearn = async (req, res) => {


    let id = req.query.id;

    let categoryId;

    try {
        categoryId = await LinkInfoLearnCategory.find({ codeCategory: id })

    } catch (err) {
        return new Error(err);
    }

    if (!categoryId) {
        return res.status(200).json({ message: "No book found given ID" })
    }


    return res.status(200).json({ categoryId });
};

export const getCategoryAllInfoLinkLearn = async (req, res) => {

    let categories;

    try {
        categories = await LinkInfoLearnCategory.find()
    }
    catch (err) {
        return new Error(err)
    }

    if (!categories) {
        return res.status(500).json({ message: "Internal Server Error" })
    }

    if (categories.length == 0) {
        return res.status(404).json({ message: "No books found" })
    }

    return res.status(200).json({ categories });
};


export const getCategoryIdInfoFilesLearn = async (req, res) => {


    let id = req.query.id;

    let categoryId;

    try {
        categoryId = await FilesLearnInfoCategory.find({ codeCategory: id })

    } catch (err) {
        return new Error(err);
    }

    if (!categoryId) {
        return res.status(200).json({ message: "No book found given ID" })
    }


    return res.status(200).json({ categoryId });
};

export const getCategoryAllInfoFilesLearn = async (req, res) => {

    let categories;

    try {
        categories = await FilesLearnInfoCategory.find()
    }
    catch (err) {
        return new Error(err)
    }

    if (!categories) {
        return res.status(500).json({ message: "Internal Server Error" })
    }

    if (categories.length == 0) {
        return res.status(404).json({ message: "No books found" })
    }

    return res.status(200).json({ categories });
};