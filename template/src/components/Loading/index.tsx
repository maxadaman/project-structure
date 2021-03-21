import React, { useState, useEffect } from 'react';
import './index.scss';

interface ILoadingProps {
  timeout: number
}

const Loading: React.FC<ILoadingProps> = ({ timeout: initialTimeout = 300 }) => {
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), initialTimeout);
    return () => clearTimeout(timeout);
  }, []);

  return <div className={'loading'}>{show && <h3 className={'loading__title'}>Loading...</h3>}</div>;
};

export default Loading;
