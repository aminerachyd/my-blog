import React, { Fragment } from "react";
import PropTypes from "prop-types";

// Redux
import { connect } from "react-redux";

const PrivateComponent = ({ auth: { isAuthenticated }, children }) => {
  return <div className={!isAuthenticated && "d-none"}>{children}</div>;
};

PrivateComponent.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateComponent);
