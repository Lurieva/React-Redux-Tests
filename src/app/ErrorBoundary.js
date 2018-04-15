import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = { 
        error: null
    };

    componentDidCatch(error, errorInfo) {
        this.setState({ error });
    }

    render() {
        if (this.state.error) {
            return (
                <div>
                    <p>I'm sorry — something is gone wrong.</p>
                </div>
            );
        } else {
            return this.props.children;
        }
    }
  }

export default ErrorBoundary;