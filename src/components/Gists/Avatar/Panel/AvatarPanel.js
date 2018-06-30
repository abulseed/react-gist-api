import React from 'react';

import AvatarImage from '../AvatarImage';

import classes from './AvatarPanel.css';

const AvatarPanel = (props) => {
  const styleClass = [classes.AvatarPanel];
  if (props.styleClass) {
    styleClass.push(props.styleClass);
  }
  return (
    <div className={styleClass.join(' ')}>
      <AvatarImage width={props.width} height={props.height} src={props.avatarUrl} layout={props.layout} />
      <div>{props.username}</div>
    </div>
  );
}

export default AvatarPanel;