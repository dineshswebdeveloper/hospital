import React from "react";
import {Link} from "react-router-dom"
import "./SelectionArea.css"
function SelectionArea() {
  return (
    <section className="col bg_image_selection_area d-flex justify-content-center align-items-center">
      <div className="">
        <div className="d-flex flex-column justify-content-center">
          <Link to={`/clinicalmenu?module=department`} className="px-3 btn btn-info my-3 letter_space_2px">DEPARTMENT</Link>
          <Link to={`/clinicalmenu?module=doctor`} className="px-3 btn btn-warning my-3 letter_space_2px">DOCTOR</Link>
          <Link to={`/patientserach`} className="px-3 btn btn-dark my-3 letter_space_2px">SEARCH PATIENT</Link>
          <Link to={`/administration`} className="px-3 btn btn-danger my-3 letter_space_2px">ADMIN</Link>
        </div>
      </div>
    </section>
  );
}

export default SelectionArea;
