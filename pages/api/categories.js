import { connectToDatabase } from "../../api-helpers/utils";
import { getAllCategories } from "../../api-helpers/controllers/Category-controller";


export default async function handler(req, res) {

    await connectToDatabase();

    if (req.method === "GET") {
        return getAllCategories(req, res);
    }
}