import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import PropTypes from 'prop-types';

class AvatarImage extends Component {
  render() {
    return (
      <Image width={this.props.width} height={this.props.height} src={this.props.src} {...this.props.layout} />
    );
  }
}

AvatarImage.propTypes = {
  src: PropTypes.string.isRequired,
  layout: PropTypes.object,
}

export default AvatarImage;