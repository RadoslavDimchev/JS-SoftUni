import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null
    };
  }

  static getDerivedStateFromError(error) {
    console.log('getDerivedStateFromError', error);
    return { error: error.message };
  }

  componentDidCatch(error, errorInfo) {
    console.log('componentDidCatch', error);
    console.log('componentDidCatch', errorInfo);
  }

  render() {
    if (this.state.error) {
      return <h1>Error</h1>
    }

    return this.props.children;
  }
}

export default ErrorBoundary;