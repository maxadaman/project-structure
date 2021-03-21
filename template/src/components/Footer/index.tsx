import React from 'react';
import './index.scss';

const Footer: React.FC = () => (
  <footer className={'footer'}>
    <p>
      ©
      {new Date().getFullYear()}
      DataMix. All Rights Reserved
    </p>
  </footer>
);

export default Footer;
