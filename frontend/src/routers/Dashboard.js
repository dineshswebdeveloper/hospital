import React, { Fragment } from 'react'
import Navbar from '../components/Navbar';
export default function Dashboard() {
  return (
    <Fragment>
        <Navbar/>
        <iframe className='col' src={`${window.location.origin}/selectionarea`}>
        </iframe>
    </Fragment>
  )
}
