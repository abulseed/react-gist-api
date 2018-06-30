import React from 'react';

import AvatarPanel from '../Avatar/Panel/AvatarPanel';

import classes from './CardDetails.css';

const CardDetails = (props) => {
  return (
    <AvatarPanel
      styleClass={classes.CardDetails}
      width={100} height={100}
      avatarUrl={props.avatarUrl}
      layout={{ circle: true }}
      username={props.username} />
  );
};

export default CardDetails;