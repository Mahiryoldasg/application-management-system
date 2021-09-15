import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../../App';
import { AppProvider } from '../../context/context';
import Admin from './Admin';

describe('its should render correctly', () => {
  beforeEach(() => {
    render(
      <AppProvider>
        <Router>
          <Admin />
        </Router>
      </AppProvider>
    );
  });
  test('Correctly rendered Admin page', () => {
    const name = screen.getByText('Bekleyen Başvurular');
    expect(name).toBeInTheDocument();
  });
});
