import React from 'react';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

Notification.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
