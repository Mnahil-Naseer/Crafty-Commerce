import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const location = useLocation();
  const showHeader = location.pathname !== '/login' && location.pathname !== '/billing' ;
  const showFooter = location.pathname !== '/login' && location.pathname !== '/billing'  ;

  return (
    <>
      {showHeader && <Header />}
      <Sidebar />
      <main>{children}</main>
      {showFooter && <Footer />}
    </>
  );
};

export default Layout;
