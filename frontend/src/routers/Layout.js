import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./System/Login/Login";
import Dashboard from "./Dashboard";
import PrivateRoutes from "../utils/PrivateRoutes";
import SelectionArea from "./System/SelectionArea/SelectionArea"
import ClinicalMenu from "./Clinical/ClinicalMenu/ClinicalMenu";
import ClinicalPatientList from "./Clinical/ClinicalPatientList/ClinicalPatientList"
function Layout() {
  
  return (
    <Fragment>
      <div className="d-flex flex-column min-vh-100">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route element={<PrivateRoutes />}>
        {/* <Route path="/" element={<Dashboard/>}></Route> */}
          <Route index path="/selectionarea" element={<SelectionArea/>} />
          <Route path="/clinicalmenu" element={<ClinicalMenu />} />
          <Route path="/clinicalpatientlist" element={<ClinicalPatientList />} />
        </Route>
      </Routes>
      </div>
    </Fragment>
  );
}

export default Layout;
