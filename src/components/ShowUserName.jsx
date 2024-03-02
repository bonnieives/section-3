import React from 'react';

const ShowUserName = (props) => {
  return (
    <div>
      <h2>The name of the user is: {props.name}</h2>
    </div>
  );
};

export default ShowUserName;