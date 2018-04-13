import React, { Component } from 'react';

class ExampleBoundary extends Component {
    state = { 
        error: null
    };

    componentDidCatch(error, errorInfo) {
        console.log('error')
        this.setState({ error });
    }

    render() {
        if (this.state.error) {
            return (
                <div>
                    <p>We're sorry — something's gone wrong.</p>
                    <p>Our team has been notified, but click here fill out a report.</p>
                </div>
            );
        } else {
            //when there's not an error, render children untouched
            return this.props.children;
        }
    }
  }