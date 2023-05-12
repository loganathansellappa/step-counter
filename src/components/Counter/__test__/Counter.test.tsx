import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from '../Counter';
import renderer from 'react-test-renderer';

describe('Counter', () => {
  test('matches the snapshot', () => {
    const tree = renderer.create(<Counter defaultValue={1} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders correctly with default value', () => {
    const { getByText, getByLabelText } = render(<Counter />);
    const incrementButton = getByText('+');
    const decrementButton = getByText('-');
    const resetButton = getByText('Reset');
    const stepInput = getByLabelText('Current Step value');
    const counterValue = getByText('Counter Value: 0');

    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();
    expect(resetButton).toBeInTheDocument();
    expect(stepInput).toBeInTheDocument();
    expect(stepInput).toHaveValue('0');
    expect(counterValue).toBeInTheDocument();
  });

  test('increments the counter when the + button is clicked', () => {
    const { getByText, getByLabelText } = render(<Counter />);
    const incrementButton = getByText('+');
    const stepInput = getByLabelText('Current Step value');
    const counterValue = getByText('Counter Value: 0');

    fireEvent.change(stepInput, { target: { value: '2' } });
    fireEvent.click(incrementButton);
    expect(counterValue).toHaveTextContent('2');

    fireEvent.click(incrementButton);
    expect(counterValue).toHaveTextContent('4');
  });

  test('decrements the counter when the - button is clicked', () => {
    const { getByText, getByLabelText } = render(<Counter />);
    const decrementButton = getByText('-');
    const stepInput = getByLabelText('Current Step value');
    const counterValue = getByText('Counter Value: 0');

    fireEvent.change(stepInput, { target: { value: '3' } });
    fireEvent.click(decrementButton);
    expect(counterValue).toHaveTextContent('-3');

    fireEvent.click(decrementButton);
    expect(counterValue).toHaveTextContent('-6');
  });

  test('resets the counter when the Reset button is clicked', () => {
    const { getByText, getByLabelText } = render(<Counter />);
    const incrementButton = getByText('+');
    const resetButton = getByText('Reset');
    const stepInput = getByLabelText('Current Step value');
    const counterValue = getByText('Counter Value: 0');

    fireEvent.change(stepInput, { target: { value: '2' } });
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(resetButton);
    expect(counterValue).toHaveTextContent('0');
  });

  test('updates the step value when the input changes', () => {
    const { getByLabelText } = render(<Counter />);
    const stepInput = getByLabelText('Current Step value');

    fireEvent.change(stepInput, { target: { value: '3' } });
    expect(stepInput).toHaveValue('3');

    fireEvent.change(stepInput, { target: { value: 'abc' } });
    expect(stepInput).toHaveValue('abc');
  });

  test('displays an error message when the step value is invalid', () => {
    const { getByLabelText, getByText } = render(<Counter />);
    const incrementButton = getByText('+');
    const stepInput = getByLabelText('Current Step value');

    fireEvent.change(stepInput, { target: { value: '-1' } });
    fireEvent.click(incrementButton);

    const errorMessage = getByText('Please enter a valid number greater than or equal to 1.');
    expect(errorMessage).toBeInTheDocument();
  });
});
