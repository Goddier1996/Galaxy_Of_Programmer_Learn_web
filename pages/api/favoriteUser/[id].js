import { connectToDatabase } from "../../../api-helpers/utils";
import { favoriteSaveIdUser, favoriteRemoveIdUser } from "../../../api-helpers/controllers/Users-controller";


export default async function handler(req, res) {

    await connectToDatabase();

    if (req.method === "GET") {
        return favoriteSaveIdUser(req, res);
    }

    else if (req.method === "DELETE") {
        return favoriteRemoveIdUser(req, res);
    }
}