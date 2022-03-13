import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getTranslate } from "./store/actions";
import { Helmet } from "react-helmet";

class Translate extends React.Component {
  componentDidMount() {
    this.props.getTranslate();
  }
  render() {
    return this.props.login ? (
      <Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>1111111111111L</title>
          <meta name="description" content="1111111111111" />
        </Helmet>
        <div>
          {this.props.list.map((item) => (
            <p key={item.id}>title:{item.title}</p>
          ))}
        </div>
      </Fragment>
    ) : (
      // 服务端渲染的时候重定向信息会注入到服务端路由中StaticRouter的context
      // 注入重定向信息
      <Redirect to="/" />
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    login: state.header.login,
    list: state.translate.translateList,
  };
};
const mapDispatchToProps = (dispatch) => ({
  getTranslate() {
    dispatch(getTranslate());
  },
});
const ExportTranslate = connect(mapStateToProps, mapDispatchToProps)(Translate);
ExportTranslate.loadData = (store) => {
  console.log(11111);
  return store.dispatch(getTranslate());
};

export default ExportTranslate;
