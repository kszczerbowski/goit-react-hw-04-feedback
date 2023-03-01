import css from './FeedbackButton.module.css';
import React from 'react';
import PropTypes from 'prop-types';

export const FeedbackButton = ({ option, changeHandler }) => {
  return (
    <button
      onClick={changeHandler}
      type="button"
      id={option.toLowerCase()}
      className={css.feedbackButton}
    >
      {option}
    </button>
  );
};

FeedbackButton.propTypes = {
  option: PropTypes.string,
  changeHandler: PropTypes.func,
};
