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
  

  });