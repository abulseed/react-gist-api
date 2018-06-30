import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

import Aux from '../Auxiliary/Auxiliary';

const withAxiosHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    }

    componentWillMount() {
      this.reqInerceptor = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });
      this.resInerceptor = axios.interceptors.response.use(res => res, error => {
        this.setState({ error });
      });
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInerceptor);
      axios.interceptors.response.eject(this.resInerceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    }

    render() {
      let errorMsg = null;
      if (this.state.error) {
        const errorResponseMsg = this.state.error.response ?
          this.state.error.response.data.message :
          undefined;

        errorMsg = errorResponseMsg || this.state.error.message;
      }
      return (
        <Aux>
          <Modal
            style={{ color: 'black' }}
            show={this.state.error}
            onHide={this.errorConfirmedHandler}>
            {errorMsg}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  }
};

export default withAxiosHandler;