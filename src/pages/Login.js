import React from "react";
import "../styles/RegiserStyles.css";
import { Form, Input, message } from "antd";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //form handler
  const onfinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/login", values);
      window.location.reload();
      dispatch(hideLoading());
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successfully");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("something went wrong");
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
      <h1 style={{textAlign:'center',fontSize:'40px',color:'#218380',marginBottom: "20px",
          marginTop: "0",}}>MedEase</h1>
    <div className="form-container " 
    >

      <Form
        layout="vertical"
        onFinish={onfinishHandler}
        className="register-form"
        style={{backgroundColor:'#C5E7D8',borderRadius:'5px',padding:'3%'}}
      >
        
        <h3 className="text-center" style={{fontSize:'30px'}}>Login</h3>

        <Form.Item label="Email" name="email">
          <Input type="email" required autoComplete="off" />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input type="password" required  />
        </Form.Item>
        <Link to="/register" className="m-2">
          Not a user Register here
        </Link>
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </Form>
    </div>
    </div>
  );
};

export default Login;
