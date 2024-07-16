import { screen, render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Blog from '../Blog';


describe('Blog Component', () => {
  test('renders blog heading', () => {
    render(<Blog />);
    const headingElement = screen.getByText(/Blog/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders blog items with correct text', () => {
    render(<Blog />);
    const blogItems = screen.getAllByText(/UI Interactions of the week/i);
    expect(blogItems.length).toBe(4);

    blogItems.forEach((item) => {
      expect(item).toBeInTheDocument();
    });
  });

  test('renders blog items with dates and handles', () => {
    render(<Blog />);
    const dateElements = screen.getAllByText(/12 Feb 2019/i);
    const handleElements = screen.getAllByText(/express handlebars/i);

    expect(dateElements.length).toBe(4);
    expect(handleElements.length).toBe(4);

    dateElements.forEach((date) => {
      expect(date).toBeInTheDocument();
    });

    handleElements.forEach((handle) => {
      expect(handle).toBeInTheDocument();
    });
  });

  test('renders blog item paragraphs', () => {
    render(<Blog />);
    const paraElements = screen.getAllByText(/armet minim moliit non doserunt uilamko est sit aliqua dolor do ament sint.Velit officia/i);
    expect(paraElements.length).toBe(4);

    paraElements.forEach((para) => {
      expect(para).toBeInTheDocument();
    });
  });
});
