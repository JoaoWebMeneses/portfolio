import { Link as NavLink,Outlet } from "react-router-dom";
import "./Root.css"
function Root (){
  return(
    <div id="navbar">
      <nav>
        <NavLink 
          className={({ isActive }) =>isActive ? "active link" : "link" }
          to="/"
        >
          Home
        </NavLink>
        <NavLink 
          className={({ isActive }) =>isActive ? "active link" : "link" }
          to="/aboutme"
        >
          About Me
        </NavLink>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Root;