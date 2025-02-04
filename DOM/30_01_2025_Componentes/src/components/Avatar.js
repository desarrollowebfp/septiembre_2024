import "./Avatar.css";

const userSettings = {
  username: "Yria",
  size: "md",
  color: "lightblue",
};

const Avatar = (userSettings) => {
  if (!userSettings.img) {
    return `<div class="avatar ${
      userSettings.size || "md"
    }" style="background-color:${userSettings.color || "crimson"}">${
      userSettings.username[0]
    }</div>`;
  } else {
    return `<div class="avatar ${userSettings.size || "md"}">
      <img src="${userSettings.img}" alt="${userSettings.username} avatar"/>
            </div>`;
  }
};

export default Avatar;
