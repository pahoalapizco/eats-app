import React from 'react'
import Spinner from 'react-spinner-material';

const Loagind = () => {
  return (
    <div style={{margin:"40% 30% 0 40%"}}>
      <Spinner size={80} spinnerColor={"#FF5252"} spinnerWidth={2} visible={true} />
    </div>
  );
};

export default Loagind;