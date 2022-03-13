import React, { Component } from "react";

class NotFound extends Component {
  componentWillMount() {
    if (
      this.props.staticContext &&
      this.props.staticContext.isNotFound !== undefined
    ) {
      this.props.staticContext.isNotFound = true;
    }
  }
  render() {
    return <div>NotFound</div>;
  }
}
export default NotFound;
