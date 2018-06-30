import React from 'react';
import { Pager } from 'react-bootstrap';

const Paginator = (props) => (
  <Pager style={{ padding: '10px' }}>
    <Pager.Item onClick={props.onPrevious} disabled={props.previousDisabled} previous>Previous</Pager.Item>
    <Pager.Item onClick={props.onNext} disabled={props.nextDisabled} next>Next</Pager.Item>
  </Pager>
);

export default Paginator;