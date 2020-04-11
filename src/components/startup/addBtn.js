import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "antd";
import "./addBtn.css";

const addBtn = () => {
  return (
    <Link
      className="addBtn"
      // style={{

      // }}
      to={"/startup_edit"}
    >
      <Icon type="plus-circle" />
      Төсөл нэмэх
    </Link>
  );
};
export default addBtn;
