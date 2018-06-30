import React, { Component } from 'react';

import Layout from './highOrder/Layout/Layout';
import GistsContainer from './containers/GistsContainer/GistsContainer';

class App extends Component {
  render() {
    return (
      <Layout>
        <GistsContainer />
      </Layout>
    );
  }
}

export default App;
