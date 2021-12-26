import React from 'react';
import './app.css';
//router
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
//components
import { Modal, Header, Footer } from './components/index';
//pages
import { Home } from './pages/index';
function App() {
  const login = false;
  return (
    <>
      <Header />
      <Modal />
      <BrowserRouter>
        <Route path='/' exact component={Home} />
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
