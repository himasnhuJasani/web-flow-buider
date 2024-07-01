import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

import './BackgroundLayoutStyle.css';
const BackgroundLayout = () => {
	return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default BackgroundLayout;
