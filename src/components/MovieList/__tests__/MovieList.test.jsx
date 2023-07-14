import React from 'react';
import { render } from '@testing-library/react';
import MovieList from '../MovieList';

describe('MovieList', () => {
  const movies = [
    {
      title: 'Movie 1',
      images: {
        'Poster Art': {
          url: 'https://example.com/poster1.jpg',
        },
      },
    },
    {
      title: 'Movie 2',
      images: {
        'Poster Art': {
          url: 'https://example.com/poster2.jpg',
        },
      },
    },
  ];

  it('should render a list of movies', () => {
    const { getAllByAltText, getAllByTestId } = render(<MovieList movies={movies} />);

    const movieImages = getAllByTestId('movie-image');
    const movieTitles = getAllByTestId('movie-title');

    expect(movieImages.length).toBe(movies.length);
    expect(movieTitles.length).toBe(movies.length);

    movieImages.forEach((image, index) => {
      expect(image.getAttribute('alt')).toBe(movies[index].title);
    });

    movieTitles.forEach((title, index) => {
      expect(title.textContent).toBe(movies[index].title);
    });
  });
});
