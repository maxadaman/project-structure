import React, { useState, useEffect } from 'react';
import Modal from 'modularComponents/Modal';
import { RouterPropsFromRedux } from './types';
import ScrollToTop from 'components/ScrollToTop';
import Router from '../Router';
import routes from './routes';

const AppContainer: React.FC<RouterPropsFromRedux> = ({ location, handleResize, checkJwt }) => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  useEffect(() => {
    checkJwt();
    setLoading(false);
  }, [checkJwt]);

  if (loading) return <div>Loading</div>;

  return (
    <ScrollToTop>
      <Modal path={location.pathname} />
      <Router routes={routes} />
    </ScrollToTop>
  );
};
export default AppContainer;
