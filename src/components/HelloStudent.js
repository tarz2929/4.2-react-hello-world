import React from 'react';

const HelloStudent = props => {
  return (
    <p>
        Hello
        { props.name },
        welcome to TECHCareers and its React unit.. !
        thier favorite unit is:&nbsp;
        {props.unit}
        
    </p>
  );
}

export default HelloStudent;
