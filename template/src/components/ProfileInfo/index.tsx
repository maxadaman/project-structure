import React from 'react';
import './index.scss';

interface IProfileInfoProps {
  sidebarProps: {
    firstName: string;
    lastName: string
  }
}

const ProfileInfo: React.FC<IProfileInfoProps> = ({ sidebarProps: { firstName, lastName } }) => {
  return (
    <div className={'profile-info__wrp'}>
      <p className={'profile-info__field'}>{firstName}</p>
      <p className={'profile-info__field'}>{lastName}</p>
    </div>
  )
};

export default ProfileInfo
