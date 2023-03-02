import React from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => {
    return (
      <button
        key={option}
        onClick={() => onLeaveFeedback(option.toLowerCase())}
        type="button"
        className={css.feedbackButton}
      >
        {option}
      </button>
    );
  });
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
