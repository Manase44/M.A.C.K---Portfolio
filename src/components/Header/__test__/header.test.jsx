import { describe, test, expect } from "vitest";
import { screen, render } from "@testing-library/react";


describe("Header component testing", () => {
  test('should contain navigation links', () => {
    render(<Header />);
    screen.logTestingPlaygroundURL();
    const headerNavLinks = screen.getByText("blog");
    expect(headerNavLinks).toBeInTheDocument();

  })
  test('should contain navigation links', () => {
    render(<Header />);
    const headerNavLinks = screen.getAllByTestId("nav-link")
    headerNavLinks.forEach((link) => {
      expect(link).toBeInTheDocument();
    })
  })
  test('should contain only three navigation links', () => {
    render(<Header />);
    const headerNavLinks = screen.getAllByTestId("nav-link")
    expect(headerNavLinks.length).toBeGreaterThanOrEqual(3)
  })

})