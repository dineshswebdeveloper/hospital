import React, { Fragment, useEffect, useState } from "react";
import axios from "../../../api/axios";
import { authRequest, authSuccess, authFail } from "../../../store/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import "./login.css";
import {FaUserTie} from "react-icons/fa"
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation()
  const { user,isAuthorised } = useSelector((state) => state.authReducer);
  useEffect(() => {
    if (isAuthorised && user) {
      navigate("/selectionarea",{state:location,replace:true});
    }
  }, [isAuthorised, navigate,user]);
  const [currUser, setCurrUser] = useState({ username: "", password: "" });
  const [userStatus, setUserStatus] = useState({
    usernamestatus: null,
    passwordstatus: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrUser({ ...currUser, [name]: value });
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      dispatch(authRequest());
      await axios.post("/api/user/userlogin", currUser).then((res) => {
        if (res.data.status === "username does not match") {
          setUserStatus({
            ...userStatus,
            usernamestatus: `* ${res.data.status}`,
          });
        } else if (res.data.status === "password does not match") {
          setUserStatus({ usernamestatus: "" });
          setUserStatus({ passwordstatus: `* ${res.data.status}` });
        } else if (res.data.status === "user logined") {
          setUserStatus({ usernamestatus: "", passwordstatus: "" });
          setCurrUser({ email: "", password: "" });
          dispatch(authSuccess(res.data.oldUser));
        }
      });
    } catch (err) {
      dispatch(authFail(`err in auth:${err.message}`));
      alert("iuhyuh")
    }
  };

  return (
    <Fragment>
      <section className="login-main">
        <main className="container">
          <div className="">
              <div className="login-sub row flex-column min-vh-100">
                <div className="py-5">
                  <h6 className="text-center fs-1 text-secondary py-5">
                    CLINICAL INFORMATION
                  </h6>
                </div>
                <div className="col row justify-content-center mx-auto">
                  <div className="col row align-items-start align-items-md-center justify-content-center pb-5">
                      <form onSubmit={handleSubmit} className=" pb-3 login-form" autoComplete="off">
                          <div className="text-center pb-3" style={{fontSize:"3.5rem",color:"rgba(16, 175, 207, 1)"}}>
                              <FaUserTie/>
                          </div>
                          <div className="login-input-data mb-2">
                              <input onChange={handleChange} type="text" name="username" id="loginUserName" placeholder='' autoFocus spellCheck="false" />
                              <label htmlFor="loginUserName" className="">USERNAME</label>
                          </div>
                          <div className="login-input-data mb-2">
                              <input onChange={handleChange} type="password" name="password" id="loginPass" placeholder='' spellCheck="false" />
                              <label htmlFor="loginPass" className="">PASSWORD</label>
                          </div>
                          <div className="text-end mt-2">
                              <input type="submit" value="Login" className='btn btn-success py-1' />
                          </div>
                      </form>
                  </div>
                </div>
              </div>
          </div>
        </main>
      </section>
    </Fragment>
  );
}

export default Login;
