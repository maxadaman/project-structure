import React from 'react';
import { AvatarContext } from 'context/UserAvatarContext';
import ProfileInfo from 'components/ProfileInfo';
import ModalInfo from 'components/ModalInfo';
import AvatarCard from 'components/AvatarCard';
import { IHomePageProps } from './types';
import { icons } from 'constants/icons';
import './index.scss';

const { menu } = icons;

const HomePage: React.FC<IHomePageProps> = ({ openSidebar, toOpen }) => {
  const handleProfileInfo = (): void => {
    openSidebar(ProfileInfo, { title: 'Profile info', firstName: 'Test', lastName: 'Test 1' });
  };
  const handleProfileModal = ():void => {
    toOpen(ModalInfo, { title: 'test' });
  };
  const handleAvatar = (): void => {
    console.warn(123123);
  };
  return (
    <div className={'home-page'}>
      <h1>Home page</h1>
      <button className={'home-page__button'} onClick={handleProfileInfo}>
        <i className={menu}></i>
      </button>
      <button className={'home-page__button'} onClick={handleProfileModal}>
        <i className={menu}></i>
      </button>
      <AvatarContext.Provider value={{ avatarUrl: 'test', getAvatar: handleAvatar }}>
        <AvatarCard />
      </AvatarContext.Provider>
    </div>
  );
};

export default HomePage;
