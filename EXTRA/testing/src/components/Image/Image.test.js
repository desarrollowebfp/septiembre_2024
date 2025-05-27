/**
 * @vitest-environment jsdom
 */

import { describe, it, expect } from "vitest";
import Image from "./Image";
import { screen } from "@testing-library/dom";

describe("Image Component", () => {
  it("El componente renderiza el src y alt correctos", () => {
    document.body.innerHTML = "";
    const img = Image({
      src: "https://www.liderlogo.es/wp-content/uploads/2022/12/pasted-image-0-6-1024x576.png",
      alt: "Netflix Logo",
    });
    document.body.appendChild(img);
    const rendered = screen.getByRole("img", {name: "Netflix Logo"});
    expect(rendered).toHaveAttribute("src", "https://www.liderlogo.es/wp-content/uploads/2022/12/pasted-image-0-6-1024x576.png");
    expect(rendered).toHaveAttribute("alt", "Netflix Logo");
  });
});
