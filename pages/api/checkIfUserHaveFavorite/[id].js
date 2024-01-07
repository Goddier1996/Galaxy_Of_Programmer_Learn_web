import { connectToDatabase } from "../../../api-helpers/utils";
import { checkIfUserHaveThisFavorite } from "../../../api-helpers/controllers/Users-controller";


export default async function handler(req, res) {

    await connectToDatabase();

    if (req.method === "GET") {
        return checkIfUserHaveThisFavorite(req, res);
    }
}