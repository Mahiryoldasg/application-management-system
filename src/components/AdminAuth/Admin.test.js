import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AdminAuth from './AdminAuth';
import { AppProvider } from '../../context/context';

describe('its should render correctly', () => {
  beforeEach(() => {
    render(
      <AppProvider>
        <Router>
          <AdminAuth />
        </Router>
      </AppProvider>
    );
  });
  test('Correctly rendered AdminAuth page', () => {
    const name = screen.getByText('Admin Girişi');
    expect(name).toBeInTheDocument();
  });
});
