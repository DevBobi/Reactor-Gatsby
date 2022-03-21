import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <div container className='bg-black px-20'>
        <Header />
        <main className="text-gray-900 ">{children}</main>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Layout;
