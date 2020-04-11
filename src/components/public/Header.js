import React, { Component } from "react";
import { PageHeader } from "antd";
import Login from "../../modals/Login";
import SignUp from "../../modals/SignUp";
import cookie from "react-cookies";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      loginVisible: false,
      signUpVisible: false,
      items: {},
      userId: 0
    };
  }
  componentDidMount() {
    console.log(this.props);
    this.setState({
      userId: cookie.load("userId")
    });
  }
  showSignUp(signUpVisible) {
    this.setState({ signUpVisible });
  }

  showLogin(loginVisible) {
    this.setState({ loginVisible });
  }
  render() {
    const atags = [];
    atags.push(
      <a href='/ideas' style={{ padding: "0 15px 0 15px", color: "#656565" }}>
        Хөрөнгө оруулах
      </a>
    );
    atags.push(
      <a href='/startup/Firstpage' style={{ padding: "0 15px 0 15px", color: "#656565" }}>
        Старт ап хийх
      </a>
    );
    atags.push(
      <Login
        visible={this.state.loginVisible}
        onCancel={() => this.showLogin(false)}
        setMe={this.props.setMe}
      />
    );
    atags.push(
      <SignUp
        visible={this.state.signUpVisible}
        onCancel={() => this.showSignUp(false)}
        setMe={this.props.setMe}
      />
    );
    if (this.state.userId > 0) {
      atags.push(<a  style={{ padding: "0 15px 0 15px", color: "#656565" }}
    >{cookie.load('userName').charAt(0).toUpperCase() + cookie.load('userName').slice(1)}</a>)
      atags.push(<a  style={{ padding: "0 15px 0 15px", color: "#656565" }}
      onClick={() => {cookie.remove('userId'); cookie.remove('userName'); window.location.reload();}}>Гарах</a>);
      
    } else {
      atags.push(
        <a
          style={{ padding: "0 15px 0 15px", color: "#656565" }}
          onClick={() => this.showLogin(true)}
        >
          Нэвтрэх
        </a>
      );
      atags.push(
        <a
          style={{ padding: "0 15px 0 15px", color: "#656565" }}
          onClick={() => this.showSignUp(true)}
        >
          Бүртгүүлэх
        </a>
      );
    }

    return (
      <PageHeader
        style={{
          border: "1px solid rgb(235, 237, 240)"
        }}
        extra={atags}
        title="Render"
        // subTitle="This is a subtitle"
        className='tolgoi'
        avatar={{
          src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4"
        }}
      />
    );
  }
}

export default Header;
