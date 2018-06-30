import React, { Component } from 'react';

const withList = (WrappedComponent) => {
  return class extends Component {
    render() {
      return this.props.list.map((item, index) => {
        return <WrappedComponent {...item} {...this.props} key={index} />;
      })
    }
  }
};

export default withList;