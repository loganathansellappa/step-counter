import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import App from '../App';
import { render } from '@testing-library/react';

describe('App component', () => {
  test('matches the snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders the Counter component without error', () => {
    const { container } = render(<App />);
    const inputElement = container.getElementsByClassName('counter__input')[0];
    expect(inputElement).toBeInTheDocument();
  });
});
