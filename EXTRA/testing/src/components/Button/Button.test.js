/**
 * @vitest-environment jsdom
 */

import {describe, it, expect} from "vitest";
import Button from "./Button";
import { screen } from "@testing-library/dom";

describe("Button Component", () => {
    it("Crear el botón con el texto indicado por argumento", () => {
        document.body.innerHTML = "";
        const btn = Button("Login");
        document.body.appendChild(btn);
        expect(screen.getByText("Login")).toBeInTheDocument();
    })
    it("Crear el botón con la etiqueta semántica adecuada", () => {
        document.body.innerHTML = "";
        const btn = Button("Example");
        document.body.appendChild(btn);
        expect(screen.getByRole("button")).toBeInTheDocument();
    })
})