import React, { Component } from 'react';

import AvatarPanel from '../Avatar/Panel/AvatarPanel';
import withList from '../../../highOrder/withList/withList';

import classes from './ForkDetails.css';

class ForkDetails extends Component {
  render() {
    return (
      <AvatarPanel
        styleClass={classes.ForkDetails}
        width={30} height={30}
        avatarUrl={this.props.avatarUrl}
        layout={{ rounded: true }}
        username={this.props.username} />
    )
  }
}

export default withList(ForkDetails);