import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { signout } from "../store/slices/auth";
import {RxHamburgerMenu} from "react-icons/rx"
export default function Navbar() {
    const dispatch =useDispatch()
    const {user}=useSelector(state=>state.authReducer)
  return (
    <section className="sticky-top bg-white user_select_none">
      <div className="linear_gradient_blue py-1 my-1 px-4 d-flex text-center align-items-center justify-content-between rounded ">
      <span className=" text-warning ps-3">{user?.name}</span>
      <span className=" d-flex align-items-center"> 
        {/* <RxHamburgerMenu/>*/}
        <span className="btn btn-danger py-1" onClick={()=>dispatch(signout())}>logout</span>
      </span>
    </div>
    </section>
  );
}

