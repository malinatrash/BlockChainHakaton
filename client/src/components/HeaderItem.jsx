import React from 'react';

const HeaderItem = ({text}) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '220px',
      height: '50px',
      background: 'white',
      borderRadius: '25px',
    }}>
      <span style={{color: 'black', fontWeight: '500', textDecorationLine: 'underline'}}>{text}</span>
    </div>
  );
};

export default HeaderItem;
