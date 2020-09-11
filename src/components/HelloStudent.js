import React from 'react';

const HelloStudent = props => {
  return (
    <p>
        Hello&nbsp;
        { props.name.toUpperCase()},
        { ' ' + props.name },
        welcome to TECHCareers and its React unit.. !
        thier favorite unit is:&nbsp;
        {props.unit}
        
    </p>
  );
}

export default HelloStudent;
