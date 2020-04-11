import React, { Component } from "react";
import { Icon, Input, Button, Form, Modal } from "antd";
import PublicUserService from "../services/PublicUserService";
import MeService from '../services/MeService';
import cookie from 'react-cookies'
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      service: "",
      email: "",
      password: "",
      value: "",
      error: "",
      isCorrect: false,
      items: {},
      me: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.service = new PublicUserService();
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  handleChangePass(event) {
    this.setState({ password: event.target.value });
  }
  qParamSearch = value =>{
    let param = {};
    param.q = JSON.stringify({ email :value.toUpperCase()});
    return param;
  }
  handleSubmit(event) {
    event.preventDefault();
    // Utils.showSpinner();
    this.service.login(this.state.email, this.state.password).then(
      success => {
        // Utils.hideSpinner();
        if (success.status) {
        let service = new MeService();
        service.query(this.qParamSearch(success.result.userName)).then(result=>result.json()).then(result=>{
          cookie.save('userId', result.items[0].id);
          cookie.save('userName', result.items[0].user_name);
          console.log('cookie',cookie.load('userId'))
          window.location.reload();
          
        })
        console.log(success)
        } else {
          this.setState({
            isCorrect: true,
            error: "Уучлаарай, хэрэглэгчийн нэр эсвэл нууц үг буруу байна."
          });
        }
      }).catch(() => {
        // Utils.hideSpinner();
        this.setState({
          isCorrect: true,
          error: "Уучлаарай, нэвтрэх явцад алдаа гарлаа."
        });
      });
  }

  render() {
    return (
      <Modal
        title="Нэвтрэх"
        visible={this.props.visible}
        onCancel={this.props.onCancel}
        centered
        footer={null}
      >
        <Form className="loginForm" onSubmit={e => this.handleSubmit(e)}>
          <Form.Item>
            <Input
              className="mail"
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="И-Мэйл"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Item>
          <Form.Item>
            <Input.Password
              className="pass"
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Нууц үг"
              value={this.state.password}
              onChange={this.handleChangePass}
            />
            <span style={{ color: "red" }}>{this.state.error}</span>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Нэвтрэх
            </Button>
            <Button
              type="link"
              className="changePassBtn"
              onClick={this.showModal}
              style={{ float: "right" }}
            >
              Нууц үг солих
            </Button>
            {/* <ChangePassword
              visible={this.state.visible}
              onCancel={this.handleCancel}
            /> */}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}
