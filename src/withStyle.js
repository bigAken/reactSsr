import React from "react";

export default (DecoratedComponent, style) => {
  return class NewComponent extends React.Component {
    componentWillMount() {
      if (this.props.staticContext) {
        this.props.staticContext.css.push(style._getCss());
      }
    }
    render() {
      return <DecoratedComponent {...this.props}></DecoratedComponent>;
    }
  };
};
