import { connectToDatabase } from "../../../api-helpers/utils";
import { registerCheckIfHaveThisUserInDataBase, updateUser } from "../../../api-helpers/controllers/Users-controller";


export default async function handler(req, res) {

    await connectToDatabase();

    if (req.method === "GET") {
        return registerCheckIfHaveThisUserInDataBase(req, res);
    }


    if (req.method === "PUT") {
        return updateUser(req, res);
    }
}