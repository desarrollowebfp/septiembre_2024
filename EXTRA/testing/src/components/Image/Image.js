const Image = ({src, alt}) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    return img;
}

export default Image