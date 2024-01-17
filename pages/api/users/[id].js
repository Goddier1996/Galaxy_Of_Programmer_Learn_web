import { connectToDatabase } from "../../../api-helpers/utils";
import { profileId } from "../../../api-helpers/controllers/Users-controller";


export default async function handler(req, res) {

    await connectToDatabase();

    if (req.method === "GET") {
        return profileId(req, res);
    }

}