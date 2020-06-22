import React from 'react';

const PrivatePageExample = props => {
  return (
    <>
      <h2>This page belongs to: {props.user.username}</h2>
    </>
  );
};

export default PrivatePageExample;
