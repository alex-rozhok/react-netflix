import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.less';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  logError(error, info) {
    console.log(error);
    console.log(info);
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    this.logError(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container">
          <h1 className={styles.error__title}>Oops, something went wrong.</h1>
        </div>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node,
};
