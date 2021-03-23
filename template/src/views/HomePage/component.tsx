import React from 'react';
import OfficeContext from 'context/OfficeContext';
import ProfileInfo from 'components/ProfileInfo';
import ModalInfo from 'components/ModalInfo';
import Location from 'components/Location';
import { IHomePageProps } from './types';
import { icons } from 'constants/icons';
import './index.scss';

const { menu } = icons;

const HomePage: React.FC<IHomePageProps> = ({ openSidebar, openModal }) => {
  const handleProfileInfo = (): void => {
    openSidebar(ProfileInfo, { title: 'Profile info', address: 'Metrotech Center, Brooklyn, NY 11201, USA' });
  };
  const handleProfileModal = (): void => {
    openModal(ModalInfo, { title: 'Profile info', description: 'Metrotech Center, Brooklyn, NY 11201, USA' });
  };
  return (
    <div className={'home-page'}>
      <h1 className={'home-page__title'}>Home page</h1>
      <div className={'home-page__example-content'}>
        <div className={'controls-panel'}>
          <button className={'controls-panel__button'} onClick={handleProfileInfo}>
            Trigger Sidebar <i className={menu}></i>
          </button>
          <button className={'controls-panel__button'} onClick={handleProfileModal}>
            Trigger modal <i className={menu}></i>
          </button>
        </div>
        <OfficeContext.Provider value={{ address: 'Metrotech Center, Brooklyn, NY 11201, USA' }}>
          <Location />
        </OfficeContext.Provider>
      </div>
    </div>
  );
};

export default HomePage;
