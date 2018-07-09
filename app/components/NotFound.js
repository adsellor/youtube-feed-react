import React from 'react';

import '../scss/base.scss';

export default ({ user }) => {
  return (
    <div className='container'>
      <div>
        <img src='/images/missing.png' className='image' />
        <p className="message"> You Lost Buddy ? </p>
        </div>
    </div>
  );
};
