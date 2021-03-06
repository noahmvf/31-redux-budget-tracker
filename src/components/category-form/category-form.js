import React from 'react';
import PropTypes from 'prop-types';

import './category-form.scss';

const defaultState = {
  title: '',
};

export default class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.category || defaultState;
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ title: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onComplete(this.state);
  }

  render() {
    const buttonText = this.props.category ? 'Update' : 'Create';
    return (
      <form
        onSubmit={ this.handleSubmit }
        className="category-form"
        data-cy="category-form"
      >
        <input 
          className="title"
          type="text"
          name="title"
          placeholder="title"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button type="submit">{buttonText}</button>
      </form>
    );
  }
}

CategoryForm.propTypes = {
  onComplete: PropTypes.func,
  category: PropTypes.object,
};
