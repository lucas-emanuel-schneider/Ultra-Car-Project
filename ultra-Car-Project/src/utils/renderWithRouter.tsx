import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react'
import { ReactNode } from "react";

function renderWithRouter(componente: ReactNode) {
  return render(<MemoryRouter>{componente}</MemoryRouter>);
}

export default renderWithRouter;