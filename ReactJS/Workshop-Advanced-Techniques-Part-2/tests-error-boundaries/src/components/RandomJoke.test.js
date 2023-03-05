import { cleanup, render, screen } from "@testing-library/react";
import RandomJoke from "./RandomJoke";

const fakeJoke = {
  value: 'Chuck Norris mocked joke',
  icon_url: undefined
};

afterEach(cleanup);

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeJoke)
    })
  );
});

it('should show joke', async () => {
  render(<RandomJoke />);

  const element = await screen.findByText(fakeJoke.value);

  expect(element).toBeInTheDocument();
});