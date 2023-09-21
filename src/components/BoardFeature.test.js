import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BoardFeature from './BoardFeature';

describe('BoardFeature', () => {
  it('renders the calculator buttons', () => {
    const { getByText } = render(<BoardFeature onClickButton={() => {}} />);
    expect(getByText('AC')).toBeInTheDocument();
    expect(getByText('+/-')).toBeInTheDocument();
    expect(getByText('%')).toBeInTheDocument();
    expect(getByText('÷')).toBeInTheDocument();
    expect(getByText('x')).toBeInTheDocument();
    expect(getByText('-')).toBeInTheDocument();
    expect(getByText('+')).toBeInTheDocument();
    expect(getByText('0')).toBeInTheDocument();
    expect(getByText('.')).toBeInTheDocument();
    expect(getByText('=')).toBeInTheDocument();
  });

  it('calls the onClickButton function when a button is clicked', () => {
    const onClickButton = jest.fn();
    const { getByText } = render(<BoardFeature onClickButton={onClickButton} />);
    fireEvent.click(getByText('1'));
    expect(onClickButton).toHaveBeenCalledWith('1');
  });
});
