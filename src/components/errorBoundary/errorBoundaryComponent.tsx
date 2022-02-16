import React from "react";
import { Alert } from "react-bootstrap";
import "./errorBoundaryComponent.css";
// import Alert from "react-feather/dist/icons/alert-triangle";

const Fallback = React.memo(() => (
  <div className="error-boundary">
    <Alert color="orange" />
    <span>Something went wrong</span>
  </div>
));

export default class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    return this.state.hasError ? <Fallback /> : this.props.children;
  }
}
