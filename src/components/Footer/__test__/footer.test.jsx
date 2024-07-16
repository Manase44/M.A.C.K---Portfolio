import { describe, test, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import Footer from "../Footer";

describe('Footer component testing', () => {
  test('should render four social links', () => {
    render(<Footer/>)
    const socialList = screen.getAllByRole("listitem");
    expect(socialList.length).toBeLessThanOrEqual(4);
    socialList.forEach((listitem) => {
        expect(listitem).toBeInTheDocument();
        expect(listitem).toBeVisible();
    })
  })
 test('should render a paragraph', () => {
    render(<Footer/>)
    const paragraph = screen.getByRole("paragraph");
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toBeVisible();
 })
 
})
