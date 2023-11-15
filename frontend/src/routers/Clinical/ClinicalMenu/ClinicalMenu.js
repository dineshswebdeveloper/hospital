import React, { Fragment, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "../../../api/axios";
export default function ClinicalMenu() {
  const location = useLocation()
  const module =location.search.split('?')[1].split('=')[1]
  const [moduleList,setModuleList] =useState([])
  useEffect(()=>{
    const getModuleList = async () => {
      try {
        let req_URL = ''
        if (module==='doctor') {
          req_URL=`/api/user/getdoctorlist`
        }else if (module==='department') {
          req_URL=`/api/user/getdepartmentlist`
        }
        const {data}=await axios.get(req_URL)
          if (data.status === "success") {
            setModuleList(data?.data)
          }    
      } catch (err) {
         console.log(err);
      }
    };
    getModuleList()
  },[module])
  return (
    <section className="col bg-primary bg_image_selection_area">
      <div className="">
        <div className="pt-2 mx-0 row flex-column justify-content-center text-center">
        {moduleList.map((ele,ind)=>{
          return (
            <Fragment key={ind}><Link to={`/clinicalpatientlist?module=${module}&id=${ele.id}`} className="my-1 py-1 btn btn-info text-white linear_gradient_blue col-8 mx-auto" style={{maxWidth:"250px"}}>{ele?.NAME}</Link></Fragment>
          )
        })}
       
        </div>
      </div>
    </section>
  );
}
