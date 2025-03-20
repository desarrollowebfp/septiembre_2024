import "./Nav.css";

const Nav = (links) => `
  <nav>
    <ul>
      ${links
        .map(
          (link) => `
      <li>
        <a href="${link.path}">${link.name}</a>
      </li>
      `
        )
        .join("")}
    </ul>
  </nav>
  `;

export default Nav;
