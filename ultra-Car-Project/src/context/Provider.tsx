import React, { useState } from 'react';
import Context from './Context';

interface IProps {
  children: React.ReactNode;
}

function Provider({ children }: IProps) {
  const [currentClient, setCurrentClient] = useState([]);
    const value = React.useMemo(
    () => ({
      currentClient,
      setCurrentClient,
    }),
    [
      currentClient,
      setCurrentClient
    ],
  );
  return (
  <Context.Provider
    value={ value }
  >
    {children}
  </Context.Provider>
  );
}


export default Provider;
