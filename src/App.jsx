import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
     <Header></Header>
    <Outlet></Outlet>
    {/* footer */}
    <Footer></Footer>
    </div>
  );
};

export default App;