import React from 'react';

import classes from './SearchForm.css';
import Button from '../../UI/Button/Button';

const SearchForm = (props) => (
  <form className={classes.SearchForm} onSubmit={props.submitted}>
    <input
      placeholder='Gist Username'
      value={props.value}
      onChange={props.changed}
      className={classes.InputField} />
    <Button type='Success' disabled={!props.formValid}>submit</Button>
  </form>
);

export default SearchForm;