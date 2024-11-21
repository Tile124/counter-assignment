// import necessary react testing library helpers here
// import the Counter component here
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

let count;

beforeEach(() => {
  render(<Counter />);
  count = screen.getByTestId('count');
  // Render the Counter component here
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  expect(count).toHaveTextContent('0');
  // Complete the unit test below based on the objective in the line above
});

test('clicking + increments the count', () => {
  expect(count).toHaveTextContent('0');
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);
  expect(count).toHaveTextContent('1');
  // Complete the unit test below based on the objective in the line above
});

test('clicking - decrements the count', () => {
  expect(count).toHaveTextContent('0');
  const decrementButton = screen.getByText('-');
  fireEvent.click(decrementButton);
  expect(count).toHaveTextContent('-1');
  // Complete the unit test below based on the objective in the line above
});
