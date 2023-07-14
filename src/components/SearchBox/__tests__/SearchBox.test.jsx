import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBox from '../SearchBox';

describe('SearchBox', () => {
  it('should call the onSearch function with the input value when the search input changes', () => {
    const onSearchMock = jest.fn();
    const { getByPlaceholderText } = render(<SearchBox value="" onSearch={onSearchMock} />);
    const searchInput = getByPlaceholderText('Search the site…');
    const searchValue = 'Test search';

    fireEvent.change(searchInput, { target: { value: searchValue } });

    expect(onSearchMock).toHaveBeenCalledWith(searchValue);
  });

  it('should display the provided value in the search input', () => {
    const value = 'Test value';
    const { getByPlaceholderText } = render(<SearchBox value={value} onSearch={() => {}} />);
    const searchInput = getByPlaceholderText('Search the site…');

    expect(searchInput.value).toBe(value);
  });
});
