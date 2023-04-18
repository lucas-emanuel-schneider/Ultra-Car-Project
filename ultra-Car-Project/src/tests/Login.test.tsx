import LoginForm from "../components/LoginForm";
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react'
import { ReactNode } from "react";

function renderWithRouter(componente: ReactNode) {
  return render(<MemoryRouter>{componente}</MemoryRouter>);
}

describe('Login test', () => {
  test('Look for the buttons under login and type in them', () => {
    renderWithRouter(<LoginForm />)
    const img = screen.getByRole('img', {
  name: /ultracar/i
})
    expect(img).toBeDefined();
  })
})