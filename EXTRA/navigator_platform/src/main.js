import "./style.css";

document.querySelector("#app").innerHTML = `
    <header>
        <img
          src="https://cdn.fastly.steamstatic.com/store//about/logo_steam.svg"
          alt="Steam logo"
        />
        <nav>
          <ul>
            <li>
              <a id="home_a" href="#null">Home</a>
            </li>
            <li>
              <a id="downloads_a" href="#null">Downloads</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h2>Home</h2>
        <button id="actualplatform"></button>
      </main>
      <footer>
        <p>Steam OS - 2025</p>
      </footer>
`;

document.querySelector("#home_a").addEventListener("click", () => {
  document.querySelector("main").innerHTML = `
  <h2>Home</h2>
  <button id="actualplatform"></button>
  `;
  detectPlatform();
});

document.querySelector("#downloads_a").addEventListener("click", () => {
  document.querySelector("main").innerHTML = `
  <h2>Downloads</h2>
  <ul class="downloads">
  <li>
    <button>
      <img src="https://img.icons8.com/?size=100&id=100511&format=png&color=000000" alt="Windows logo"/>Windows
    </button>
  </li>
  <li>
    <button>
      <img src="https://img.icons8.com/?size=100&id=95294&format=png&color=000000" alt="macOS logo"/>macOS
    </button>
  </li>
  <li>
    <button>
      <img src="https://img.icons8.com/?size=100&id=JWgloo80juYW&format=png&color=000000" alt="Linux logo"/>Linux
    </button>
  </li>
  </ul>
  `;
});

//macOS
//Linux
//Windows
const detectPlatform = () => {
  const button = document.querySelector("#actualplatform");
  const platform = navigator.platform || "Win";
  if (platform.includes("Mac")) {
    button.innerHTML = `<img src="https://img.icons8.com/?size=100&id=95294&format=png&color=000000" alt="macOS logo"/>macOS`;
  } else if (platform.includes("Linux")) {
    button.innerHTML = `<img src="https://img.icons8.com/?size=100&id=JWgloo80juYW&format=png&color=000000" alt="Linux logo"/>Linux`;
  } else if (platform.includes("Win")) {
    button.innerHTML = `<img src="https://img.icons8.com/?size=100&id=100511&format=png&color=000000" alt="Windows logo"/>Windows`;
  } else {
    button.innerHTML = `<img src="https://img.icons8.com/?size=100&id=100511&format=png&color=000000" alt="Windows logo"/>Windows`;
  }
};
document.addEventListener("DOMContentLoaded", detectPlatform);
