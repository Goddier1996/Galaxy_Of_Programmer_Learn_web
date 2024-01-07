import { connectToDatabase } from "../../api-helpers/utils";
import { signInUser } from "../../api-helpers/controllers/Users-controller";


export default async function handler(req, res) {

    await connectToDatabase();

    if (req.method === "POST") {
        return signInUser(req, res);
    }
}