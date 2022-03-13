import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getHomeList } from "./store/actions.js";
import style from "./style.css";
import withStyle from "../../withStyle";
import { Helmet } from "react-helmet";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getHomeList();
  }
  getList() {
    const { list } = this.props;
    return list.length
      ? list.map((item) => <span key={item.id}>{item.title}</span>)
      : null;
  }

  render() {
    return (
      <Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>HGE JFDAKSJKL</title>
          <meta
            name="description"
            content="范德萨范德萨范德萨范德萨范德萨范德萨范德萨"
          />
        </Helmet>
        <div className={style.test}>
          Home name {this.props.name}
          {this.getList()}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.home.name,
    list: state.home.newList,
  };
};
const mapDispatchToProps = (dispatch) => ({
  getHomeList() {
    dispatch(getHomeList());
  },
});

const ExportHome = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyle(Home, style));

ExportHome.loadData = (store) => {
  return store.dispatch(getHomeList());
};
export default ExportHome;
