import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from '../../context/context';
import Form from './Form';

describe('its should render correctly', () => {
  beforeEach(() => {
    render(
      <AppProvider>
        <Router>
          <Form />
        </Router>
      </AppProvider>
    );
  });
  test('Correctly rendered Form page', () => {
    const name = screen.getByText('Başvuru Formu');
    expect(name).toBeInTheDocument();
  });
});
