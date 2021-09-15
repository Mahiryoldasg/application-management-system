import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from '../../context/context';
import Error from './Error';

describe('its should render correctly', () => {
  beforeEach(() => {
    render(
      <AppProvider>
        <Router>
          <Error />
        </Router>
      </AppProvider>
    );
  });
  test('Correctly rendered Error page', () => {
    const name = screen.getByText('Ana ekrana dönmek için tıklayınız.');
    expect(name).toBeInTheDocument();
  });
});
