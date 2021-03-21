import React from 'react';
import { useSelector } from 'react-redux';
import { getHeadquarterOffices } from './selectors';
import { IOffice } from 'types/about';
import './index.scss';

const About: React.FC = () => {
  const offices: Array<IOffice> = useSelector(getHeadquarterOffices);
  return (
    <div className={'about-page'}>
      About
    </div>
  );
};

export default About;
