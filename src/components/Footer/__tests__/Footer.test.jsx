import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer', () => {
  it('should render the footer with social media icons', () => {
    const { getAllByAltText } = render(<Footer />);
    const socialIcons = getAllByAltText(/^(facebook|instagram|twitter|youtube)$/i);

    expect(socialIcons).toHaveLength(4);

    socialIcons.forEach((icon) => {
      expect(icon.tagName).toBe('IMG');
      expect(icon).toHaveAttribute('width', '15');
      expect(icon).toHaveAttribute('height', '15');
    });
  });

  it('should render the copyright text', () => {
    const { getByText } = render(<Footer />);
    const copyrightText = getByText(/©\d{4} Jorge Rojano\. All rights reserved\./i);

    expect(copyrightText).toBeInTheDocument();
  });
});
