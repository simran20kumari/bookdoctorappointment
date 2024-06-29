import React from "react";
import Layout from "./../components/Layout";
import { message, Tabs } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NotificationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  //   handle read notification
  const handleMarkAllRead = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/get-all-notification",
        {
          userId: user._id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.message);
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("somthing went wrong");
    }
  };

  // delete notifications
  const handleDeleteAllRead = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/delete-all-notification",
        { userId: user._id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.message);
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Somthing Went Wrong In Ntifications");
    }
  };
  return (
    <Layout>
      <h3 className="p-3 text-center" style={{color:'#0D6EFD'}}>Notifications</h3>
      <Tabs>
        <Tabs.TabPane tab="NEW"  key={0}>
          <div className="d-flex justify-content-end">
            <button className="btn btn-outline-info" style={{marginRight:'2%'}} onClick={handleMarkAllRead}>
              Mark All Read
            </button>
          </div>
          {user?.notifcation.map((notificationMgs) => (
            <div className="card" style={{ cursor: "pointer",marginLeft:'2%',marginRight:'2%',marginBottom:'5px',padding:'10px',fontSize:'16px' }}>
              <div
                className="card-text"
                onClick={() => navigate(notificationMgs.onClickPath)}
              >
                {notificationMgs.message}
              </div>
            </div>
          ))}
        </Tabs.TabPane>
        <Tabs.TabPane tab="READ" key={1}>
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-outline-danger"
              style={{ cursor: "pointer",marginRight:'2%' }}
              onClick={handleDeleteAllRead}
            >
              Delete All Read 
            </button>
          </div>
          {user?.seennotification.map((notificationMgs) => (
            <div className="card" style={{ cursor: "pointer" ,marginLeft:'2%',marginRight:'2%',marginBottom:'5px',padding:'10px',fontSize:'16px' }}>
              <div
                className="card-text"
                onClick={() => navigate(notificationMgs.onClickPath)}
              >
                {notificationMgs.message}
              </div>
            </div>
          ))}
        </Tabs.TabPane>
      </Tabs>
    </Layout>
  );
};

export default NotificationPage;
