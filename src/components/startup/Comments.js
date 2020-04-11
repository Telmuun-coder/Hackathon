import React, { Component } from "react";
import "antd/dist/antd.css";
import { Comment, Avatar, Form, Button, List, Input } from "antd";
import moment from "moment";
const { TextArea } = Input;
const ExampleComment = ({ children }) => (
  <Comment
    actions={[<span key="comment-nested-reply-to">Reply to</span>]}
    author={<a>Тэргэл</a>}
    avatar={
      <Avatar
        src="https://avatars1.githubusercontent.com/u/8186664?s=460&v=4"
        alt="Тэргэл"
      />
    }
    content={
      <p>
        М-Си-Эс Групп нь үндэсний хэмжээний хувийн хэвшлийн томоохон групп болон
        өргөжиж хөгжсөн бөгөөд өнөөдөр бид инженеринг дэд бүтэц, уул уурхай, үл
        хөдлөх хөрөнгө, харилцаа холбоо, өргөн хэрэглээний бүтээгдэхүүний
        үйлдвэрлэл,
      </p>
    }
  >
    {children}
  </Comment>
);
const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    // header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Add Comment
      </Button>
    </Form.Item>
  </div>
);
class Comments extends Component {
  state = {
    comments: [],
    submitting: false,
    value: ""
  };
  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: "",
        comments: [
          {
            author: "Тэргэл",
            avatar:
              "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4",
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow()
          },
          ...this.state.comments
        ]
      });
    }, 1000);
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  render() {
    const { comments, submitting, value } = this.state;
    return (
      <div>
        {comments.length > 0 && <CommentList comments={comments} />}
        <ExampleComment>
          <ExampleComment></ExampleComment>
        </ExampleComment>
        <Comment
          avatar={
            <Avatar
              src="https://avatars1.githubusercontent.com/u/8186664?s=460&v=4"
              alt="Тэргэл"
            />
          }
          content={
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
      </div>
    );
  }
}

export default Comments;
