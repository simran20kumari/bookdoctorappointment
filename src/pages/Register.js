import React from "react";
import "../styles/RegiserStyles.css";
import { Form, Input, message } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // form handler
  const onFinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/register", values);
      dispatch(hideLoading());
      if (res.data.success) {
        message.success("Register Successfully!");
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something Went Wrong");
    }
  };

  return (
    <div
      style={{
        backgroundImage: 'url("/img1.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "40px",
          color: "#218380",
          marginBottom: "20px",
          marginTop: "0",
        }}
      >
        MedEase
      </h1>

      <div className="form-container">
        <Form
          layout="vertical"
          onFinish={onFinishHandler}
          className="register-form"
          style={{
            backgroundColor: "#C5E7D8",
            borderRadius: "5px",
            padding: "3%",
          }}
        >
          <h3 className="text-center" style={{ fontSize: "30px" }}>
            Register
          </h3>

          <Form.Item label="Name" name="name">
            <Input type="text" required autoComplete="off" />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" required autoComplete="off" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <Link to="/login" className="m-2">
            Already a user? Login here
          </Link>
          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
