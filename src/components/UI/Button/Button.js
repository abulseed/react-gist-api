import React from 'react';

import classes from './Button.css';

const Button = (props) => {
  const styleClasses = [classes.Button];
  if (props.disabled) {
    styleClasses.push(classes.Disabled);
  }
  return (
    <button
      className={styleClasses.join(' ')}
      onClick={props.clicked}
      disabled={props.disabled}>{props.children}</button>
  );
}

export default Button;