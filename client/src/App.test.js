import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('render a diff ele', () => {
  const p = document.createElement('p');
  ReactDOM.render(<App />, p);
});

test('header rendering', () => {
  const { getByTestId } = render(<App />);
  getByTestId(/header/i);
});

test('player cards rendering', () => {
  const { getByTestId } = render(<App />);
  getByTestId(/player-card/i);
});
