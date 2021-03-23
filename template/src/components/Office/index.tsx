import React, { useContext } from 'react';
import OfficeContext from 'context/OfficeContext';

const Office: React.FC = () => {
  const { address } = useContext(OfficeContext);
  return (
    <div className={'office__wrp'}>
      <p className={'office__address'}>{address}</p>
    </div>
  )
};

export default Office;
