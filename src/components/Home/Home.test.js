import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../../App';
import { AppProvider } from '../../context/context';

describe('its should render correctly', () => {
  beforeEach(() => {
    render(
      <AppProvider>
        <Router>
          <App />
        </Router>
      </AppProvider>
    );
  });
  test('Correctly rendered Home page', () => {
    const name = screen.getByTestId('form');
    expect(name).toBeInTheDocument();
  });

  test('Clicked on Application form button and redirect user to the form and user can go back to Home page', () => {
    const button = screen.getByTestId('form');

    fireEvent.click(button);
    expect(screen.getByText('Başvuru Formu'));

    const button2 = screen.getByText('Ana ekrana dönmek için tıklayınız.');

    fireEvent.click(button2);
    expect(screen.getByText('Hoşgeldiniz..'));
  });

  test('Clicked on Application query button and redirect user to the application query page and and user can go back to Home page', () => {
    const button = screen.getByTestId('query');

    fireEvent.click(button);
    expect(screen.getByText('Sorgula'));

    const button2 = screen.getByText('Geri dön');

    fireEvent.click(button2);
    expect(screen.getByText('Hoşgeldiniz..'));
  });

  test('Clicked on Admin button and redirect user to the admin auth page and and user can go back to Home page', () => {
    const button = screen.getByTestId('admin');

    fireEvent.click(button);
    expect(screen.getByText('Anasayfaya dön'));

    const button2 = screen.getByText('Anasayfaya dön');

    fireEvent.click(button2);
    expect(screen.getByText('Hoşgeldiniz..'));
  });
});
