
export const mainPagesChoose = (indexPage, history) => {

    if (indexPage == 1) {
        history.push("/")
    }

    if (indexPage == 2) {
        history.push("/About")
    }
};


export const mainPagesChooseLoginRegister = (indexPage, handleShowModelSignIn, handleShowModelRegister) => {

    if (indexPage == 1) {
        handleShowModelSignIn();
    }

    if (indexPage == 2) {
        handleShowModelRegister();
    }
};


export const hamburgerNavbarResponsiveScreen = (indexPage, history, setAnchorElNav, handleShowModelSignIn, handleShowModelRegister) => {

    if (indexPage == 1) {
        history.push("/");
        setAnchorElNav(null);
    }

    if (indexPage == 2) {
        history.push("/About");
        setAnchorElNav(null);
    }

    if (indexPage == 3) {
        handleShowModelSignIn();
        setAnchorElNav(null);
    }

    if (indexPage == 4) {
        handleShowModelRegister();
        setAnchorElNav(null);
    }
};


export const hamburgerNavbarResponsiveScreenUserConnect = (indexPage, history, setAnchorElNav) => {

    if (indexPage == 1) {
        history.push("/");
        setAnchorElNav(null);
    }

    if (indexPage == 2) {
        history.push("/About");
        setAnchorElNav(null);
    }
};


export const logOutUser = async (history) => {

    await sessionStorage.removeItem("user");
    await history.push("/");
    window.location.reload(false);
}


export const mainPagesChooseResponsiveScreenUserConnect = (indexPage, history, handleShowModelProfileUser, setAnchorElUser) => {

    if (indexPage == 1) {
        handleShowModelProfileUser();
        setAnchorElUser(null);
    }

    if (indexPage == 2) {
        history.push("/FavoritesUsers");
        setAnchorElUser(null);
    }

    if (indexPage == 3) {
        logOutUser(history);
        setAnchorElUser(null);
    }
};



export const applyCursorUserChoose = (urlImage, setSelectCurserHeater) => {

    document.body.style.cursor = `url(${urlImage}), pointer`;
    sessionStorage.setItem("typeCursor", urlImage);
    setSelectCurserHeater(null);
}
