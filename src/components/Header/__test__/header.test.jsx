import { describe, test, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import { Header } from "../Header";

describe("Header component testing", () => {
    test('should contain navigation links', () => {
      render(<Header/>);
      const headerNavLinks = screen.getAllByRole("link")
      headerNavLinks.forEach((link) => {
        expect(link).toBeInTheDocument();
      })
    })
    
})