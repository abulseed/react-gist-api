import React from 'react';

import { Badge } from 'react-bootstrap';

import withList from '../../../highOrder/withList/withList';

const CardBadge = (props) => (
  <Badge style={{ margin: '5px' }}>{props.content}</Badge>
);

export default withList(CardBadge);