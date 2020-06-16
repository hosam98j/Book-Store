import React, { Component } from "react";
import { signUp } from "../../../store/actions/authActions";
import { connect } from "react-redux";

class SignUp extends Component {
  state = {
    User: {
      name: "",
      password: "",
      avatar: "",
    },
  };

  hanldeSelectImg = (e) => {
    this.setState({
      ...this.state,
      User: {
        ...this.state.User,
        avatar: e.target.files[0],
      },
    });
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
    const { userSignUp } = this.props;
    e.preventDefault();

    const { name, password, avatar } = this.state.User;

    const UserData = { name, password };

    userSignUp(UserData, avatar);
  };

  render() {
    return (
      <div className="login">
        <form onSubmit={this.submitForm}>
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
            <label htmlFor="avatar">Your Img</label>
            <input
              type="file"
              name="avatar"
              id=""
              onChange={this.hanldeSelectImg}
            />
          </div>
          <div className="form-group">
            <button type="submit">SignUp</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userSignUp: (User, avatar) => dispatch(signUp(User, avatar)),
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
