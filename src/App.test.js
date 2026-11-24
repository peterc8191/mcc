import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders the Home navigation link', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const homeLink = screen.getByRole('link', { name: /home/i });
  expect(homeLink).toBeInTheDocument();
});
