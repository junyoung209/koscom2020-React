import React,{ Component, Fragment, useContext, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import Posts from './components/Posts';
import PostsForm from './components/PostsForm';

import samsung from './components/Post/삼성.jpg';
import sk from './components/Post/SK.png';

import { BrowserRouter, } from 'react-router-dom';
import RootRouter from './routers/RootRouter';
import StockContext, { StockContextProvider } from './context/StockContext';

const apiURL='http://localhost:5000/'

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