import { screen, render } from '@testing-library/react';
import { describe, test, expect } from 'vitest'; 
import Blog from '../Blog';

describe('Blog', () => {
    test('renders Blog heading', () => {
      render(<Blog />);
      expect(screen.getByText('Blog')).toBeInTheDocument();
    });
  
    test('renders all blog posts', () => {
      render(<Blog />);
      const blogPosts = screen.getAllByText('UI Interactions of the week');
      expect(blogPosts.length).toBe(4);
    });
  
    test('renders blog post details correctly', () => {
      render(<Blog />);
      const dateTags = screen.getAllByText(/12 Feb 2019\s+\|\s+Express, Handlebars/i);
      expect(dateTags.length).toBe(4);
  
      const descriptions = screen.getAllByText(/Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet./i);
      expect(descriptions.length).toBe(4);
    });

  });