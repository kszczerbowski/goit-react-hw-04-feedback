import React from 'react';
import PropTypes from 'prop-types';

export const Heading = ({ title }) => {
  return <h2>{title}</h2>;
};

Heading.propTypes = {
  title: PropTypes.string,
};
