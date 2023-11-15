import React, { Fragment, useEffect, useState } from "react";
import axios from "../../../api/axios";
import {useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
export default function ClinicalPatientList() {
  const location =useLocation()
const module = location.search.split('?')[1].split('&')[0].split('=')[1]
const moduleID = location.search.split('?')[1].split('&')[1].split('=')[1]
//const {user}=useSelector(state=>state.authReducer)
const [opPatients,setOpPatients]=useState([])
  useEffect(()=>{
    const getOpList=async()=>{
        let req_URL = ''
        let optionList={id:moduleID}
        if (module==='doctor') {
          req_URL=`/api/recpatient/getdoctorwisecurrentdayoplist`
        }else if (module==='department') {
          req_URL=`/api/recpatient/getdepartmentwisecurrentdayoplist`
        }
      try {
          const {data}=await axios.post(req_URL,optionList)
          if (data.status==="success") {
            setOpPatients(data.data)
          }
          // else{
          //   alert('op list empty')
          // }
      } catch (err) {
          console.log(err.message);
      }
    }
    getOpList()
  },[module,moduleID])
  return (
    <Fragment>
      <section className="col user_select_none bg_image_selection_area">
        <div className="container ">
          <div className="row flex-column  px-0">
            <div className="">
              <div className="">
                <div className="mt-1 border rounded py-2 bg-dark row mx-0 text-white text_13px align-items-center row-cols-4 row-cols-md-5 mb-1">
                  <div className="">PATIENT NAME</div>
                  <div className="">OP NO</div>
                  <div className="d-none d-md-block">GUARDIAN NAME</div>
                  <div className="">AGE / GENDER</div>
                  <div className="ps-1">TOKEN.NO/ REG.TIME</div>
                </div>
              </div>
              {opPatients.length>0?(opPatients.map((ele,i) => {
                return (
                  <Fragment key={i}>
                    <div  className="rounded bg-secondary mb-1 row mx-0 text-white text_13px align-items-center row-cols-4 row-cols-md-5 py-3">
                      <div className="text-capitalize">{ele.name}</div>
                      <div className="">{ele.display_number}</div>
                      <div className="d-none d-md-block">{ele.gname1}</div>
                      <div className=" text-nowrap">{new Date().getFullYear() -((ele.dob).split("-")[0])} / {ele.sex}</div>
                      <div className="ps-0 text-nowrap">{ele.token_no_doctor} / {new Date(ele.datetime).toLocaleTimeString([],{timeStyle:"short",hour12:"true"})}</div>
                    </div>
                  </Fragment>
                );
              })):(
                <Fragment>
                  <div className="row justify-content-center align-item-center py-5 text-warning">
                      <div className="text-center py-5 h4 my-5">
                        Empty Out Patient List
                      </div>
                    </div>
                </Fragment>
              )}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}


