import React, { Component } from "react";

import PropTypes from "prop-types";
import Aux from "../../hoc/Aux_Comp";
import "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <Aux>
        <Toolbar />
        <main className="content">{children}</main>
      </Aux>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
