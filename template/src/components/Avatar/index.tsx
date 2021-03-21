import React, { useContext } from 'react';
import { AvatarContext } from 'context/UserAvatarContext';

const Avatar: React.FC = () => {
  const { avatarUrl, getAvatar } = useContext(AvatarContext);
  return (
    <div onClick={getAvatar}>{avatarUrl}</div>
  )
};

export default Avatar;
