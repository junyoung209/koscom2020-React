import React,{ useContext, useEffect } from 'react';
import './App.css';

import { BrowserRouter, } from 'react-router-dom';
import RootRouter from './routers/RootRouter';
import StockContext, { StockContextProvider } from './context/StockContext';

function App() {
  const stockContext = useContext(StockContext);

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