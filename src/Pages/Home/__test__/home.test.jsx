import { describe, test, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import Home1 from "../Home1";
import About from "../About";
import Features from "../Features";

describe('Home component testing', () => {
    test('should render a heading in the home hero section', () => {
        render(<Home1 />)
        const mainHeading = screen.getByRole('heading')
        expect(mainHeading).toBeInTheDocument();
    })
    test('should render " Hi, I am John, Creative Technologist" as the hero section headingn', () => {
        render(<Home1 />)
        const mainHeading = screen.getByRole('heading');
        expect(mainHeading).toHaveTextContent(/hi, i am john, creative technologist/i);
    })
    test('should render a download resume button', () => {
        render(<Home1 />)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument();
    })
    test('should render a description paragraph', () => {
        render(<Home1 />)
        const paragraph = screen.getByTestId('subject-description')
        expect(paragraph).toBeInTheDocument();
        expect(paragraph).toBeVisible();
    })

    test('should render a download resume button with the text download resume', () => {
        render(<Home1 />)
        const button = screen.getByRole('button')
        expect(button).toHaveTextContent(/download resume/i)
    })
    test('should render an image', () => {
        render(<Home1 />)
        const image = screen.getByRole('img')
        expect(image).toBeInTheDocument();
        expect(image).toBeVisible();
    })
})

describe('About component testing', () => {
  test('should render the section heading', () => {
    render(<About/>)
    const heading = screen.getByText(/recent posts/i)
    expect(heading).toBeInTheDocument();
    expect(heading).toBeVisible();
  })
  test('should render a view all link', () => {
    render(<About/>)
    const link = screen.getByRole("link")
    expect(link).toBeInTheDocument();
    expect(link).toBeVisible();
  })
  test('should render a link with text "view all"', () => {
    render(<About/>)
    const link = screen.getByRole("link")
    expect(link).toHaveTextContent(/view all/i);
  })
  test('should render at most two cards in the about section"', () => {
    render(<About/>)
    const cards = screen.getAllByTestId("card");
    expect(cards.length).toBeLessThanOrEqual(2);
    cards.forEach((card) => {
        expect(card).toBeInTheDocument();
        expect(card).toBeVisible();
    })
  })
})


describe('Feature component testing', () => {
    test('should render the section heading', () => {
        render(<Features />)
        const heading = screen.getByText(/featured work/i)
        expect(heading).toBeInTheDocument();
        expect(heading).toBeVisible();
    })
    test('should render at most three featured works', () => {
        render(<Features />)
        const heading = screen.getAllByTestId('featured-work-heading')
       expect(heading.length).toBeLessThanOrEqual(3);
    })
    test('should render an image for each features work', () => {
        render(<Features />)
        const image = screen.getAllByRole('img')
        image.forEach((img) => {
            expect(img).toBeInTheDocument();
            expect(img).toBeVisible();
        })
    })
    test('should render a heading for each featured work', () => {
        render(<Features />)
        const heading = screen.getAllByTestId('featured-work-heading')
        heading.forEach((heading) => {
            expect(heading).toBeInTheDocument();
            expect(heading).toBeVisible();
        })
    })

})