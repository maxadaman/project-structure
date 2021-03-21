import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

type ScrollTopProps = RouteComponentProps & {
  children: any
};

const ScrollToTop: React.FC<ScrollTopProps> = ({ location, children }) => {
  useEffect(() => window.scrollTo(0, 0), [location, location.state]);
  return children;
};

export default withRouter(ScrollToTop);
