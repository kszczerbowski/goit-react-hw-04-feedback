import React, { Component } from 'react';
import css from './Notification.module.css';
import PropTypes from 'prop-types';

export class Notification extends Component {
  render() {
    const { message } = this.props;
    return <p className={css.notification}>{message}</p>;
  }
}

Notification.propTypes = {
  message: PropTypes.string,
};
