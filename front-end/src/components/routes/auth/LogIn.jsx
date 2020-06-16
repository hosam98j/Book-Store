import React, { Component } from "react";
import { connect } from "react-redux";
import { logIn } from "../../../store/actions/authActions";
import { Link } from "react-router-dom";

class LogIn extends Component {
  state = {
    User: {
      name: "",
      password: "",
    },
  };

  hanldeFieldsChanging = (e) => {
    this.setState({
      ...this.state,
      User: {
        ...this.state.User,
        [e.target.name]: e.target.value,
      },
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    const { User } = this.state;
    const { logIn } = this.props;

    logIn(User);
  };

  componentWillUnmount = () => {
    const { push } = this.props.history;
    push("/");
  };

  render() {
    return (
      <div className="login">
        <form onSubmit={this.submitForm}>
          <div className="form-group">
            <h2>Welcome</h2>
            <h5>You have to Login into Your Account</h5>
          </div>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="name"
              value={this.state.User.name}
              onChange={this.hanldeFieldsChanging}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">password</label>
            <input
              type="password"
              name="password"
              value={this.state.User.password}
              onChange={this.hanldeFieldsChanging}
            />
          </div>
          <div className="form-group">
            <button type="submit">Log in</button>
          </div>
          <div className="form-group">
            <p>
              You Don't Have Account? <Link to="/user/signup">Sign up</Link>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (User) => dispatch(logIn(User)),
  };
};

const mapStateToProps = (state) => {
  return {
    userStatus: Boolean(state.user),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
