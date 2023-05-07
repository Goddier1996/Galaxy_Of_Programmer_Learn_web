import { connectToDatabase } from "../../../api-helpers/utils";
import { addNewUser } from "../../../api-helpers/controllers/Users-controller";


export default async function handler(req, res) {

    await connectToDatabase();

    if (req.method === "POST") {
        return addNewUser(req, res);
    }

}