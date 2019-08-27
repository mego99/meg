import React, { Component } from 'react';

class AppErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <div className="apperrorboundary-wrapper">
          <h1 className="title">
            Sorry, we&apos;re having some technical difficulties right now.
          </h1>
          <p className="errorboundary-message">
            We&apos;re working on it!
          </p>
        </div>
      );
    }
    return children;
  }
}

export default AppErrorBoundary;
