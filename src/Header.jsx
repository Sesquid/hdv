import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div style={{display:'flex', height: "100px", backgroundColor: "black", position: 'fixed', top: 0, left: 0, zIndex: 100, width: "100%" }}>
      <Link to='/'>
        <div style={{padding:"0 20px", fontSize: "2rem", display: 'flex', justifyContent: 'Left', alignItems: "center", textAlign: "center", height:"100%" }}>
          WEB STUDENT
        </div>
      </Link>
      <Link to="/list-students">
        <div style={{padding:"0 20px", fontSize: "1.5rem", display: 'flex', justifyContent: 'Left', alignItems: "center", textAlign: "center", height:"100%" }}>
          ALL STUDENT
        </div>
      </Link>
    </div>
  )
}

export default Header