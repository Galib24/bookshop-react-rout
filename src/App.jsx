import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div>
     <Header></Header>
    <Outlet></Outlet>
    {/* footer */}
    </div>
  );
};

export default App;