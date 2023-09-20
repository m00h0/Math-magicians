import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';

describe('Calculator', () => {
  it('renders the calculator interface and board', () => {
    const { getByText } = render(<Calculator />);
    expect(getByText('Let\'s do some math!')).toBeInTheDocument();
    expect(getByText('AC')).toBeInTheDocument();
    expect(getByText('+/-')).toBeInTheDocument();
    expect(getByText('%')).toBeInTheDocument();
    expect(getByText('÷')).toBeInTheDocument();
    expect(getByText('x')).toBeInTheDocument();
    expect(getByText('-')).toBeInTheDocument();
    expect(getByText('+')).toBeInTheDocument();
    expect(getByText('.')).toBeInTheDocument();
    expect(getByText('=')).toBeInTheDocument();
  });
});