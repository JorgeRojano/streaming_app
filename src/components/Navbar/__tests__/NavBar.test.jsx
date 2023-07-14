import React from 'react';
import { render } from '@testing-library/react';
import { useSession, signOut } from 'next-auth/react';
import Navbar from '../Navbar';

jest.mock('next-auth/react');

describe('Navbar', () => {
  const mockLinks = [
    {
      id: 1,
      title: 'Home',
      url: '/',
    },
    {
      id: 2,
      title: 'Movies',
      url: '/movies',
    },
  ];

  it('should render the logo and navigation links', () => {
    useSession.mockReturnValue({ status: 'authenticated' });

    const { getByText } = render(<Navbar />);
    const logo = getByText('Streaming');
    const links = mockLinks.map((link) => getByText(link.title));

    expect(logo).toBeInTheDocument();
    links.forEach((link) => {
      expect(link).toBeInTheDocument();
    });
  });

  it('should render the logout button when session is authenticated', () => {
    useSession.mockReturnValue({ status: 'authenticated' });
    signOut.mockReturnValue(null);

    const { getByText } = render(<Navbar />);
    const logoutButton = getByText('Logout');

    expect(logoutButton).toBeInTheDocument();
  });

  it('should not render the logout button when session is not authenticated', () => {
    useSession.mockReturnValue({ status: 'unauthenticated' });

    const { queryByText } = render(<Navbar />);
    const logoutButton = queryByText('Logout');

    expect(logoutButton).toBeNull();
  });
});
