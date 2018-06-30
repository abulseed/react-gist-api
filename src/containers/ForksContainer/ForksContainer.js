import React, { Component } from 'react';

import axios from '../../axios-instance';
import ForkDetails from '../../components/Gists/Fork/ForkDetails';
import Spinner from '../../components/UI/Spinner/Spinner';
import withAxiosHandler from '../../highOrder/withError/withAxiosHandler';
import Aux from '../../highOrder/Auxiliary/Auxiliary';

class ForksContainer extends Component {
  state = {
    forks: [],
    loading: false
  }

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const response = await axios.get(this.props.forksUrl, {
        params: {
          page: encodeURIComponent(1),
          per_page: encodeURIComponent(3)
        }
      });
      console.log(response.data);
      const tmpforks = response.data.map(fork => {
        return {
          avatarUrl: fork.owner.avatar_url,
          username: fork.owner.login
        }
      });
      this.setState({ forks: tmpforks });
    } catch (error) {
      console.error('Axios Error', error);
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const forksDetails = this.state.loading ? <Spinner /> : <ForkDetails list={this.state.forks} />
    return (
      <Aux>
        {forksDetails}
      </Aux>
    );
  }
}

export default withAxiosHandler(ForksContainer, axios);