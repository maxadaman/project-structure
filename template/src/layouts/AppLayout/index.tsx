import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import SidebarComponent from 'modularComponents/Sidebar';
import './index.scss';

const AppLayout: React.FC = ({ children }) => (
  <>
    <Header />
    <div className={'main-wrp'}>{children}</div>
    <SidebarComponent />
    <Footer />
  </>
);

export default AppLayout;
