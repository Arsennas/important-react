import React from 'react';
import QrCode from 'react-qr-code'

const Qr = () => {
  return (
<div style={{ background: 'white', padding: '16px' ,width:'250px'}}>
    <QrCode
      size={256}
      style={{ height: "auto", maxWidth: "100%", width: "100%" }}
      value={'https://www.npmjs.com/package/react-rating-stars-component'}
      viewBox={`0 0 256 256`}/>
</div>
  );
};

export default Qr;