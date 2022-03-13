import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "./store/index";
import style from "./style.css";
import withStyle from "../../withStyle";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { login, handleLogin, handleLogout } = this.props;
    return (
      <div className={style.test}>
        <Link to="/">首页</Link>
        <br />

        {login ? (
          <Fragment>
            <Link to="/translate">翻译列表 </Link>
            <div onClick={handleLogout}>退出</div>
          </Fragment>
        ) : (
          <div onClick={handleLogin}>登录 </div>
        )}
        <br />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.header.login,
  };
};
const mapDispatchToProps = (dispatch) => ({
  handleLogin() {
    dispatch(actions.login());
  },
  handleLogout() {
    dispatch(actions.logout());
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyle(Header, style));
