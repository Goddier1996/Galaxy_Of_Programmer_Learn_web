import axios from "axios"


export const getAllCategories = async () => {

    const res = await axios.get(`${process.env.APP_URL}/api/categories`);


    if (res.status !== 200) {
        return new Error("Internal Server Error");
    }

    const data = await res.data?.categories;

    return data;
}


export const getCategoryIdInfo = async (id) => {

    const res = await axios.get(`${process.env.APP_URL}/api/category/${id}`);


    if (res.status != 200) {
        return new Error("Unable To Fetch Book From Given ID");
    }

    const data = await res.data;
    return data.categoryId;

}


export const getCategoryIdInfoVideoLearn = async (id) => {

    const res = await axios.get(`${process.env.APP_URL}/api/categoryLearnVideo/${id}`);


    if (res.status != 200) {
        return new Error("Unable To Fetch Book From Given ID");
    }

    const data = await res.data;
    return data.categoryId;

}


export const getCategoryAllInfoVideoLearn = async () => {


    const res = await axios.get(`${process.env.APP_URL}/api/categoryLearnVideo`);


    if (res.status != 200) {
        return new Error("Unable To Fetch Book From Given ID");
    }

    const data = await res.data?.categories;

    return data;

}


export const getCategoryIdInfoLinkLearn = async (id) => {


    const res = await axios.get(`${process.env.APP_URL}/api/categoryLearnLink/${id}`);


    if (res.status != 200) {
        return new Error("Unable To Fetch Book From Given ID");
    }

    const data = await res.data;
    return data.categoryId;

}


export const getCategoryAllInfoLinkLearn = async () => {


    const res = await axios.get(`${process.env.APP_URL}/api/categoryLearnLink`);


    if (res.status != 200) {
        return new Error("Unable To Fetch From Given ID");
    }

    const data = await res.data?.categories;
    return data;

}


export const getCategoryIdInfoFilesLearn = async (id) => {


    const res = await axios.get(`${process.env.APP_URL}/api/categoryFIleLearn/${id}`);

    if (res.status != 200) {
        return new Error("Unable To Fetch From Given ID");
    }

    const data = await res.data;
    return data.categoryId;

}


export const getCategoryAllInfoFilesLearn = async () => {


    const res = await axios.get(`${process.env.APP_URL}/api/categoryFIleLearn`);


    if (res.status != 200) {
        return new Error("Unable To Fetch Book From Given ID");
    }

    const data = await res.data?.categories;
    return data;

}





export const getAllUsers = async () => {


    const res = await axios.get(`${process.env.APP_URL}/api/users`);


    if (res.status != 200) {
        return new Error("Unable To Fetch Book From Given ID");
    }

    const data = await res.data?.users;
    return data;

}


export const addUser = async (data) => {

    const res = await axios.post(`${process.env.APP_URL}/api/findUser`, {
        name: data.name,
        login: data.login,
        password: data.password,
        confirmPassword: data.confirmPassword,
        avatarUser: data.avatarUser
    });



    if (res.status != 201) {
        return new Error("Database Request Rejected")
    }

    const dataResult = await res.data;

    return dataResult;
}


export const updateUser = async (id, data) => {

    const res = await axios.put(`${process.env.APP_URL}/api/findUser/${id}`, {
        name: data.name,
        login: data.login,
        password: data.password,
        confirmPassword: data.confirmPassword,
        avatarUser: data.avatarUser,
    });




    const resData = await res.data;
    return resData;
}


export const signInUser = async (data) => {

    const res = await axios.post(`${process.env.APP_URL}/api/connectUserSignIn`, data);


    sessionStorage.setItem("user", JSON.stringify(res.data));
}


export const registerCheckIfHaveThisUserInDataBase = async (login) => {

    const res = await axios.get(`${process.env.APP_URL}/api/findUser/${login}`);


    const data = await res.data;
    return data.login;
}




export const addUserFavorite = async (favorite, title, type, idUser, idFavorite) => {

    const res = await axios.post(`${process.env.APP_URL}/api/favoriteUser`, {
        favorite,
        title,
        type,
        idUser,
        idFavorite
    });


    if (res.status != 201) {
        return new Error("Database Request Rejected")
    }

    const dataResult = await res.data;

    return dataResult;
}


export const checkIfUserHaveThisFavorite = async (idUser, idFavorite) => {

    const res = await axios.get(`${process.env.APP_URL}/api/checkIfUserHaveFavorite/${idUser}`);


    const data = await res.data;
    const typeFavorite = data.filter((data) => data.idFavorite === idFavorite);

    sessionStorage.setItem("favorite", JSON.stringify(typeFavorite));
}


export const favoriteSaveIdUserFIle = async (id) => {


    const res = await axios.get(`${process.env.APP_URL}/api/favoriteUser/${id}`);


    if (res.status != 200) {
        return new Error("Unable To Fetch From Given ID");
    }

    const data = await res.data;
    let dataFavorite = data.favoriteUser;


    const typeFavorite = dataFavorite.filter((data) => data.type == "file");
    return typeFavorite;
}


export const favoriteSaveIdUserVideo = async (id) => {

    const res = await axios.get(`${process.env.APP_URL}/api/favoriteUser/${id}`);


    if (res.status != 200) {
        return new Error("Unable To Fetch From Given ID");
    }

    const data = await res.data;
    let dataFavorite = data.favoriteUser;


    const typeFavorite = dataFavorite.filter((data) => data.type == "video");
    return typeFavorite;
}


export const favoriteSaveIdUserLink = async (id) => {


    const res = await axios.get(`${process.env.APP_URL}/api/favoriteUser/${id}`);


    if (res.status != 200) {
        return new Error("Unable To Fetch From Given ID");
    }

    const data = await res.data;
    let dataFavorite = data.favoriteUser;


    const typeFavorite = dataFavorite.filter((data) => data.type == "link");
    return typeFavorite;
}


export const favoriteRemoveIdUser = async (id) => {

    const res = await axios.delete(`${process.env.APP_URL}/api/favoriteUser/${id}`);


    if (res.status != 200) {
        return new Error("Unable To Delete");
    }

    const resData = await res.data;
    return resData;
}












// connect http://localhost:3000 for programmer !!!!!

// import axios from "axios"



// export const getAllCategories = async () => {

//      const res = await axios.get("http://localhost:3000/api/categories");



//     if (res.status !== 200) {
//         return new Error("Internal Server Error");
//     }

//     const data = await res.data?.categories;

//     return data;
// }





// export const getCategoryIdInfo = async (id) => {


//      const res = await axios.get(`http://localhost:3000/api/category/${id}`);


//     if (res.status != 200) {
//         return new Error("Unable To Fetch Book From Given ID");
//     }

//     const data = await res.data;
//     return data.categoryId;

// }




// export const getCategoryIdInfoVideoLearn = async (id) => {


//     const res = await axios.get(`http://localhost:3000/api/categoryLearnVideo/${id}`);


//     if (res.status != 200) {
//         return new Error("Unable To Fetch Book From Given ID");
//     }

//     const data = await res.data;
//     return data.categoryId;

// }

// export const getCategoryAllInfoVideoLearn = async () => {


//      const res = await axios.get(`http://localhost:3000/api/categoryLearnVideo`);


//     if (res.status != 200) {
//         return new Error("Unable To Fetch Book From Given ID");
//     }

//     const data = await res.data?.categories;

//     return data;

// }




// export const getCategoryIdInfoLinkLearn = async (id) => {


//      const res = await axios.get(`http://localhost:3000/api/categoryLearnLink/${id}`);


//     if (res.status != 200) {
//         return new Error("Unable To Fetch Book From Given ID");
//     }

//     const data = await res.data;
//     return data.categoryId;

// }

// export const getCategoryAllInfoLinkLearn = async () => {


//      const res = await axios.get(`http://localhost:3000/api/categoryLearnLink`);


//     if (res.status != 200) {
//         return new Error("Unable To Fetch From Given ID");
//     }

//     const data = await res.data?.categories;
//     return data;

// }




// export const getCategoryIdInfoFilesLearn = async (id) => {


//     const res = await axios.get(`http://localhost:3000/api/categoryFIleLearn/${id}`);

//     if (res.status != 200) {
//         return new Error("Unable To Fetch From Given ID");
//     }

//     const data = await res.data;
//     return data.categoryId;

// }

// export const getCategoryAllInfoFilesLearn = async () => {


//     const res = await axios.get(`http://localhost:3000/api/categoryFIleLearn`);


//     if (res.status != 200) {
//         return new Error("Unable To Fetch Book From Given ID");
//     }

//     const data = await res.data?.categories;
//     return data;

// }




// export const getAllUsers = async () => {


//     const res = await axios.get(`http://localhost:3000/api/users`);


//     if (res.status != 200) {
//         return new Error("Unable To Fetch Book From Given ID");
//     }

//     const data = await res.data?.users;
//     return data;

// }



// export const addUser = async (data) => {

//     const res = await axios.post(`http://localhost:3000/api/findUser`, {
//         name: data.name,
//         login: data.login,
//         password: data.password,
//         confirmPassword: data.confirmPassword,
//         avatarUser: data.avatarUser
//     });



//     if (res.status != 201) {
//         return new Error("Database Request Rejected")
//     }

//     const dataResult = await res.data;

//     return dataResult;
// }


// export const updateUser = async (id, data) => {

//     const res = await axios.put(`http://localhost:3000/api/findUser/${id}`, {
//         name: data.name,
//         login: data.login,
//         password: data.password,
//         confirmPassword: data.confirmPassword,
//         avatarUser: data.avatarUser,
//     });




//     const resData = await res.data;
//     return resData;
// }



// export const signInUser = async (data) => {

//     const res = await axios.post("http://localhost:3000/api/connectUserSignIn", data);


//     sessionStorage.setItem("user", JSON.stringify(res.data));
// }


// export const registerCheckIfHaveThisUserInDataBase = async (login) => {

//     const res = await axios.get(`http://localhost:3000/api/findUser/${login}`);


//     const data = await res.data;
//     return data.login;
// }




// export const addUserFavorite = async (favorite, title, type, idUser, idFavorite) => {

//     const res = await axios.post(`http://localhost:3000/api/favoriteUser`, {
//         favorite,
//         title,
//         type,
//         idUser,
//         idFavorite
//     });


//     if (res.status != 201) {
//         return new Error("Database Request Rejected")
//     }

//     const dataResult = await res.data;

//     return dataResult;
// }


// export const checkIfUserHaveThisFavorite = async (idUser, idFavorite) => {

//     const res = await axios.get(`http://localhost:3000/api/checkIfUserHaveFavorite/${idUser}`);


//     const data = await res.data;
//     const typeFavorite = data.filter((data) => data.idFavorite === idFavorite);

//     sessionStorage.setItem("favorite", JSON.stringify(typeFavorite));
// }




// export const favoriteSaveIdUserFIle = async (id) => {


//     const res = await axios.get(`http://localhost:3000/api/favoriteUser/${id}`);


//     if (res.status != 200) {
//         return new Error("Unable To Fetch From Given ID");
//     }

//     const data = await res.data;
//     let dataFavorite = data.favoriteUser;


//     const typeFavorite = dataFavorite.filter((data) => data.type == "file");
//     return typeFavorite;
// }


// export const favoriteSaveIdUserVideo = async (id) => {

//     const res = await axios.get(`http://localhost:3000/api/favoriteUser/${id}`);


//     if (res.status != 200) {
//         return new Error("Unable To Fetch From Given ID");
//     }

//     const data = await res.data;
//     let dataFavorite = data.favoriteUser;


//     const typeFavorite = dataFavorite.filter((data) => data.type == "video");
//     return typeFavorite;
// }


// export const favoriteSaveIdUserLink = async (id) => {


//     const res = await axios.get(`http://localhost:3000/api/favoriteUser/${id}`);


//     if (res.status != 200) {
//         return new Error("Unable To Fetch From Given ID");
//     }

//     const data = await res.data;
//     let dataFavorite = data.favoriteUser;


//     const typeFavorite = dataFavorite.filter((data) => data.type == "link");
//     return typeFavorite;
// }


// export const favoriteRemoveIdUser = async (id) => {

//     const res = await axios.delete(`http://localhost:3000/api/favoriteUser/${id}`);


//     if (res.status != 200) {
//         return new Error("Unable To Delete");
//     }

//     const resData = await res.data;
//     return resData;
// }

