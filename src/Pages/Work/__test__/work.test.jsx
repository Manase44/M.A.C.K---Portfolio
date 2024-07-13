import { screen, render } from '@testing-library/react';
import { describe, test, expect } from 'vitest'
import Work from '../Work';

describe("Work Componet Testing", () => {
  test('should render the section heading', () => {
    render(<Work />)
    const sectionHeading = screen.getByRole('heading', {name: /work/i});
    expect(sectionHeading).toBeInTheDocument();
  })
  test('should render the section heading as "work"', () => {
    render(<Work />)
    screen.logTestingPlaygroundURL()
    const sectionHeading = screen.getByRole('heading', {name: /work/i});
    expect(sectionHeading).toHaveTextContent(/work/i);
  })
  test('should render the image of each work', () => {
    render(<Work/>)
    const workImage = screen.getAllByRole("img")
      workImage.forEach((image) => {
        expect(image).toBeInTheDocument();
      })
  })
  test('should render the heading of each work', () => {
    render(<Work/>)
    const workHeading = screen.getByRole('heading', {name: /designing dashboard/i})
    expect(workHeading).toBeInTheDocument()
    
  })
  test('should render a button in the details of each work', () => {
    render(<Work/>)
    const workButton = screen.getAllByRole('button', { name: /2024/i })
    workButton.forEach((button) => {
      expect(button).toBeInTheDocument();
    })
  })
  test('should render a head for each work', () => {
    render(<Work/>)
    const workHead = screen.getAllByTestId("head");
    workHead.forEach((head) => {
      expect(head).toBeInTheDocument();
    })
  })
  test('should render description for each work', () => {
    render(<Work/>)
    const workDescription = screen.getAllByTestId("description");
    workDescription.forEach((description) => {
      expect(description).toBeInTheDocument();
    })
  })
  test('should render a breaking line after each work', () => {
    render(<Work/>)
    const workLine = screen.getAllByTestId("breaking-line");
    workLine.forEach((line) => {
      expect(line).toBeInTheDocument();
      expect(line).toBeVisible();
    })
  })
  

})