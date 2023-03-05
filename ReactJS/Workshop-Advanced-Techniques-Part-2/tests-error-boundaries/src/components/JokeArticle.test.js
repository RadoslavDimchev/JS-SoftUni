import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import JokeArticle from "./JokeArticle";

// test('base', async () => {
//   const value = 'Chuck Norris something funny';
//   const container = document.createElement('div');
//   document.body.appendChild(container);

//   const root = ReactDOM.createRoot(container);

//   act(() => {
//     root.render(<JokeArticle joke={{ value }} />);
//   });

//   const actual = document.querySelector('.joke').textContent;

//   expect(value).toEqual(actual);
// });

it('should have joke text', () => {
  const value = 'Chuck Norris something funny';

  render(<JokeArticle joke={{ value }} />);

  expect(screen.getByText(value)).toBeInTheDocument();
});