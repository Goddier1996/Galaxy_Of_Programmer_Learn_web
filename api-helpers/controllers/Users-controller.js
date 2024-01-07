import Users from "../model/Users";
import FavoriteUser from "../model/FavoriteUser";



export const getAllUsers = async (req, res) => {

    let users;

    try {
        users = await Users.find()
    }
    catch (err) {
        return new Error(err)
    }

    if (!users) {
        return res.status(500).json({ message: "Internal Server Error" })
    }

    if (users.length == 0) {
        return res.status(404).json({ message: "No users found" })
    }

    return res.status(200).json({ users });
};

export const addNewUser = async (req, res) => {

    const { name, login, password, confirmPassword, avatarUser } = req.body;

    let user;

    try {
        user = new Users({ name, login, password, confirmPassword, avatarUser })
        user = await user.save();
    } catch (err) {
        return new Error(err)
    }

    if (!user) {
        return res.status(500).json({ message: "Internal Server Error" });
    }

    return res.status(201).json({ user });
};

export const updateUser = async (req, res) => {

    const id = req.query.id;

    const { name, login, password, confirmPassword, avatarUser } = req.body;

    let user;

    try {
        user = await Users.findByIdAndUpdate(id, {
            name, login, password, confirmPassword, avatarUser
        })
    } catch (err) {
        console.log(err);
    }

    if (!user) {
        return res.status(500).json({ message: "Internal Server Error" })
    }

    return res.status(200).json({ message: "Successfully Updated" });
}

export const signInUser = async (req, res) => {

    const { login, password } = req.body;

    let connectUser;

    connectUser = await Users.findOne({ login, password })

    return res.status(200).json({ connectUser });
};

export const registerCheckIfHaveThisUserInDataBase = async (req, res) => {

    let id = req.query.id;
    let findUser;
    findUser = await Users.findOne({ login: id })

    return res.status(200).json(findUser);
};

export const checkIfUserHaveThisFavorite = async (req, res) => {

    let idUser = req.query.id;

    let favoriteUser;
    favoriteUser = await FavoriteUser.find({ idUser: idUser })

    return res.status(200).json(favoriteUser);
};

export const addUserFavorite = async (req, res) => {

    const { favorite, title, type, idUser, idFavorite } = req.body;

    let favoriteUser;

    try {
        favoriteUser = new FavoriteUser({ favorite, title, type, idUser, idFavorite })

        favoriteUser = await favoriteUser.save();

    } catch (err) {
        return new Error(err)
    }

    if (!favoriteUser) {
        return res.status(500).json({ message: "Internal Server Error" });
    }

    return res.status(201).json({ favoriteUser });
}

export const favoriteSaveIdUser = async (req, res) => {

    let id = req.query.id;

    let favoriteUser;

    try {
        favoriteUser = await FavoriteUser.find({ idUser: id })

    } catch (err) {
        return new Error(err);
    }

    if (!favoriteUser) {
        return res.status(200).json({ message: "No found given ID" })
    }

    return res.status(200).json({ favoriteUser });
};

export const favoriteRemoveIdUser = async (req, res) => {

    const id = req.query.id;

    let book;

    try {
        book = await FavoriteUser.findByIdAndRemove(id);

    } catch (err) {
        return new Error(err);
    }

    if (!book) {
        return res.status(500).json({ message: "Unable to delete" })
    }

    return res.status(200).json({ message: "Successfully Deleted" });
};