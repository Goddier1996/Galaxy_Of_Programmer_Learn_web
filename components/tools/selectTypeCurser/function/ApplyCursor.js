
export const applyCursorUserChoose = (urlImage, hide) => {

    document.body.style.cursor = `url(${urlImage}), pointer`;
    sessionStorage.setItem("typeCursor", urlImage);
    hide();
};