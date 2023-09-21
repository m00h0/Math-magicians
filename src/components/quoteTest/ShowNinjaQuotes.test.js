import React from 'react';
import { render } from '@testing-library/react';
import ShowNinjaQuotes from '../ShowNinjaQuotes';

describe('ShowNinjaQuotes', () => {
  // Successfully fetches and displays quotes from API
  it('should fetch and display quotes from API', async () => {
    // Mock the fetch function
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue([
        { id: 1, quote: 'Quote 1' },
        { id: 2, quote: 'Quote 2' },
      ]),
    });

    // Render the component
    const { findByText } = render(<ShowNinjaQuotes />);

    // Wait for the quotes to be displayed
    const quote1 = await findByText('Quote 1');
    const quote2 = await findByText('Quote 2');

    // Assert that the quotes are displayed
    expect(quote1).toBeInTheDocument();
    expect(quote2).toBeInTheDocument();
  });
});
