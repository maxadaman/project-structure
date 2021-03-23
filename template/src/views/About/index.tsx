import React from 'react';
import { useSelector } from 'react-redux';
import { IOffice } from 'types/about';
import { getHeadquarterOffices } from './selectors';
import './index.scss';

const About: React.FC = () => {
  const offices: Array<IOffice> = useSelector(getHeadquarterOffices);
  return (
    <div className={'about-page'}>
      <h1>About</h1>
      <ul>
        {offices.map(item => (
          <li key={item.id}>{item.address}</li>
        ))}
      </ul>
    </div>
  );
};

export default About;
