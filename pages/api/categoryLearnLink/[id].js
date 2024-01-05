import { getCategoryIdInfoLinkLearn } from "../../../api-helpers/controllers/Category-controller";
import { connectToDatabase } from "../../../api-helpers/utils";


export default async function handler(req, res) {

    await connectToDatabase();


    if (req.method === "GET") {
        return getCategoryIdInfoLinkLearn(req, res);
    }
}