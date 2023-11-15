import React, { Fragment } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './routers/Layout';
import "./styles/styleMain.css"
function App() {
  return (
    <Fragment>
     <BrowserRouter >
        <Routes>
          <Route path='*' element={<Layout/>}/>
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default App