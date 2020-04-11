import React, { Component } from "react";
import { Form, Input, Checkbox, Button, Modal } from "antd";
import CustomerService from "../services/CustomerService";
import PublicUserService from "../services/PublicUserService";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      isCorrect: false,
      items: {},
      confirmDirty: false,
      customer: {}
    };
  }
  //boloh ysotoiii
  createCustomer = () => {
    let service = new CustomerService();
    service
      .add(this.state.customer)
      .then(result => result.json())
      .then(result => {
        if (result.status === "success") {
          service = new PublicUserService();
          service
            .login(this.state.customer.email, this.state.customer.password)
            .then(
              success => {
                if (success.status) {
                  this.props.onSuccess();
                } else {
                  this.setState({
                    isCorrect: true,
                    error:
                      "Уучлаарай, хэрэглэгчийн нэр эсвэл нууц үг буруу байна."
                  });
                }
              },
              err => {
                this.setState({
                  isCorrect: true,
                  error:
                    "Сервертэй холбогдож чадсангүй интернетийн холболтоо шалгана уу"
                });
              }
            );
        } else if (
          result.message ===
          "ORA-00001: unique constraint (MASD.SYS_USER_UK1) violated"
        ) {
          alert(
            "Энэ цахим шуудангийн хаягийг ашиглаад өмнө нь бүртгүүлчихсэн байна"
          );
        } else {
          alert("Бүртгэхэд алдаа гарлаа");
        }
      });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        if (values.agreement === true) {
          this.createCustomer();
        }
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    this.state.customer["password"] = e.target.value;
    this.forceUpdate();
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue("password")) {
      callback("Нууц үг таарахгүй байна!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  handleChange(event) {
    this.state.customer[event.target.name] = event.target.value;
    this.forceUpdate();
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };

    return (
      <Modal
        title="Бүртгүүлэх"
        visible={this.props.visible}
        onCancel={this.props.onCancel}
        centered
        footer={null}
      >
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item label="Овог">
            {getFieldDecorator("last_name", {
              rules: [
                {
                  required: true,
                  message: "Овгийн нэрийг оруулна уу!"
                }
              ]
            })(<Input name="last_name" onChange={e => this.handleChange(e)} />)}
          </Form.Item>
          <Form.Item label="Нэр">
            {getFieldDecorator("first_name", {
              rules: [
                {
                  required: true,
                  message: "Өөрийн нэрийг оруулна уу!"
                }
              ]
            })(<Input name="first_name" onChange={e => this.handleChange(e)} />)}
          </Form.Item>
          <Form.Item label="Имэйл">
            {getFieldDecorator("email", {
              rules: [
                {
                  type: "email",
                  message: "Имэйл хаяг буруу байна!"
                },
                {
                  required: true,
                  message: "Имэйл хаягаа оруулна уу!"
                }
              ]
            })(<Input name="email" onChange={e => this.handleChange(e)} />)}
          </Form.Item>
          <Form.Item label="Хэрэглэгчийн нэр">
            {getFieldDecorator("user_name", {
              rules: [
                {
                  required: true,
                  message: "Хэрэглэгчийн нэрээ оруулна уу!"
                }
              ]
            })(<Input name="user_name" onChange={e => this.handleChange(e)} />)}
          </Form.Item>
          <Form.Item label="Нууц үг" hasFeedback>
            {getFieldDecorator("password", {
              rules: [
                {
                  required: true,
                  message: "Нууц үгээ оруулна уу!"
                },
                {
                  validator: this.validateToNextPassword
                }
              ]
            })(<Input.Password />)}
          </Form.Item>
          <Form.Item label="Нууц үг давтах" hasFeedback>
            {getFieldDecorator("confirm", {
              rules: [
                {
                  required: true,
                  message: "Нууц үг зөрж байна!"
                },
                {
                  validator: this.compareToFirstPassword
                }
              ]
            })(<Input.Password onBlur={this.handleConfirmBlur} />)}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            {getFieldDecorator("agreement", {
              valuePropName: "checked"
            })(
              <Checkbox>
                Би энэхүү <a href="./components/AllIdeas/terms">нөхцөлийг</a> зөвшөөрч байна.
              </Checkbox>
            )}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Бүртгүүлэх
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}
export default Form.create()(SignUp);
