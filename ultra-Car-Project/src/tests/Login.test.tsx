import LoginForm from "../components/LoginForm";
import { screen, fireEvent } from '@testing-library/react'
import renderWithRouter from "../utils/renderWithRouter";


describe('Login test', () => {
  beforeEach(() => {
    renderWithRouter(<LoginForm />)
  })

  test('Search and type in login component inputs', () => {
    const img = screen.getByRole('img', { name: /ultracar/i })
    const emailInput = screen.getByRole('textbox')
    const passwordInput = screen.getByPlaceholderText(/password/i)
    const button = screen.getByRole('button', {
  name: /login/i
})
    expect(img).toBeDefined();
    expect(emailInput).toBeDefined();
    expect(passwordInput).toBeDefined();
    expect(passwordInput).toBeDefined();
    expect(button).toHaveProperty('disabled', true);
    fireEvent.change(emailInput, {target: {value: 'test@test.com'}})
    fireEvent.change(passwordInput, {target: {value: 'test123'}})
    expect(button).toHaveProperty('disabled', false);
    fireEvent.click(button)
  })
})