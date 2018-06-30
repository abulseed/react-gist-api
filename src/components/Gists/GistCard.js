import React from 'react';

import CardDetails from './Card/CardDetails';
import CardBadge from './Badge/CardBadge';
import ForkContainer from '../../containers/ForksContainer/ForksContainer';
import withList from '../../highOrder/withList/withList';

import classes from './GistCard.css';

const GistCard = (props) => (
  <div className={classes.GistCard}>
    <div className={classes.HeaderSection}>
      <CardDetails
        avatarUrl={props.avatarUrl}
        username={props.username} />
      <div className={classes.ForksSection} >
        <ForkContainer forksUrl={props.forksUrl} />
      </div>
    </div>
    <div className={classes.BadgesSection}>
      <CardBadge list={props.badges} />
    </div>
  </div>
);

export default withList(GistCard);