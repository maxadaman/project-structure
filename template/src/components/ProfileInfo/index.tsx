import React from 'react';
import './index.scss';

interface IProfileInfoProps {
  sidebarProps: {
    address: string
  }
}

const ProfileInfo: React.FC<IProfileInfoProps> = ({ sidebarProps: { address } }) => {
  return (
    <div className={'profile-info__wrp'}>
      <p className={'profile-info__field'}>{address}</p>
    </div>
  )
};

export default ProfileInfo
