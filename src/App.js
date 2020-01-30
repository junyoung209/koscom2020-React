import React,{ Component, Fragment, useContext, useEffect, useState } from 'react';
import './App.css';

import { BrowserRouter, } from 'react-router-dom';
import RootRouter from './routers/RootRouter';
import StockContext, { StockContextProvider } from './context/StockContext';

const App_main = {
  width: '70%',
  margin: 'auto',
};

const formStyle = {
  position: 'fixed',
  marginLeft: '-160px',
}

function App() {

  const stockContext = useContext(StockContext);
  // const [user, setUser] = useState(null);
  // const authenticated = user != null;

  // const login = ({ email, password }) => setUser(signIn({ email, password }));
  // const logout = () => setUser(null);

  useEffect(() => {
    console.log('stockContext: ', stockContext);
  }, [stockContext])

  return (
    <StockContextProvider>
      <BrowserRouter>
        <RootRouter></RootRouter>
      </BrowserRouter>
    </StockContextProvider>
  );
}
  export default App;