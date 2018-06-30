import React, { Component } from 'react';
import { parseUrl as ParseUrl } from 'query-string';

import axios from '../../axios-instance';
import withAxiosHandler from '../../highOrder/withError/withAxiosHandler';
import SearchForm from '../../components/Search/Form/SearchForm';
import GistCard from '../../components/Gists/GistCard';
import Spinner from '../../components/UI/Spinner/Spinner';

import classes from './GistsContainer.css';
import Auxiliary from '../../highOrder/Auxiliary/Auxiliary';
import Paginator from '../../components/Paginator/Paginator';

class GistsContainer extends Component {
  state = {
    gists: [],
    currentPage: 1,
    firstPage: 1,
    lastPage: 1,
    perPage: 10,
    username: '',
    loading: false,
    searchFormValid: false
  }

  searchFormSubmitHandler = async (event) => {
    event.preventDefault();
    this.resetState();
    this.loadGistsApi()
  }

  resetState = () => {
    this.setState({ currentPage: 1, lastPage: 1 });
  }

  loadGistsApi = async () => {
    try {
      await this.setState({ loading: true });
      const response = await axios.get(`/users/${this.state.username}/gists`, {
        params: {
          page: encodeURIComponent(this.state.currentPage),
          per_page: encodeURIComponent(this.state.perPage)
        }
      });
      this.setGistsFromResponse(response.data);
      this.setLastPageValue(response.headers.link);
    } catch (error) {
      console.error('Axios Error', error);
    } finally {
      await this.setState({ loading: false });
    }
  }

  setGistsFromResponse = (data) => {
    console.log(data);
    const tmpGists = data.map(item => {
      let tmpBadges = [];
      for (const key in item.files) {
        tmpBadges.push({ content: item.files[key].language || item.files[key].type });
      }
      return {
        avatarUrl: item.owner.avatar_url,
        username: item.owner.login,
        badges: tmpBadges,
        forksUrl: item.forks_url,
      };
    })
    this.setState({ gists: tmpGists });
  }

  setLastPageValue = (link) => {
    console.log(link);
    if (link) {
      const links = link.split(',');
      const tmpLastPage = links.filter(link => {
        const contentArr = link.split(';');
        const position = contentArr[1].replace(/rel="(.*)"/, '$1').trim();
        return position === 'last';
      }).reduce((acc, link) => {
        const contentArr = link.split(';');
        const url = contentArr[0].replace(/<(.*)>/, '$1');
        acc = ParseUrl(url).query['page'];
        return acc;
      }, '');
      this.setState({ lastPage: +tmpLastPage });
    }
  }

  usernameValueChangedHandler = (event) => {
    const username = event.target.value;
    const formValid = username.length > 0;
    this.setState({ searchFormValid: formValid });
    this.setState({ username });
  }

  previousPageHandler = () => {
    this.setState((prevState, props) => {
      return {
        currentPage: prevState.currentPage - 1,
      }
    });
    this.loadGistsApi();
  }

  nextPageHandler = () => {
    this.setState((prevState, props) => {
      return {
        currentPage: prevState.currentPage + 1,
      }
    });
    this.loadGistsApi();
  }

  render() {
    const gistCard = this.state.loading ? <Spinner /> : <GistCard list={this.state.gists} />;
    const paginator = this.state.gists.length > 0 ?
      <Paginator
        nextDisabled={this.state.currentPage === this.state.lastPage}
        previousDisabled={this.state.currentPage === 1}
        onPrevious={this.previousPageHandler}
        onNext={this.nextPageHandler} /> : null;
    return (
      <Auxiliary>
        <div className={classes.GistsContainer}>
          <SearchForm
            submitted={this.searchFormSubmitHandler}
            value={this.state.username}
            changed={this.usernameValueChangedHandler}
            formValid={this.state.searchFormValid} />
          {gistCard}
        </div>
        {paginator}
      </Auxiliary>
    );
  }
}

export default withAxiosHandler(GistsContainer, axios);