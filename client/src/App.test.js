import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppCard from './AppCard';
import { render } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('render a diff ele', () => {
  const p = document.createElement('p');
  ReactDOM.render(<App />, p);
});

test('is the display there', () => {
  const { getByText } = render(<AppCard />);
  getByText("Searches:");
  getByText("ID: ");
});
