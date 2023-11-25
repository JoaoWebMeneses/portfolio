import { Link as NavLink,Outlet } from "react-router-dom";
import "./Root.css"
function Root (){
  return(
    <div id="navbar">
      <nav>
        <NavLink 
          id="home"
          className={({ isActive }) =>isActive ? "active link" : "link" }
          to="/home"
        >
          <a>Home</a>
        </NavLink>
        <NavLink
          id="aboutme"
          className={({ isActive }) =>isActive ? "active link" : "link" }
          to="/aboutme"
        >
          <a>About me</a>
        </NavLink>
        <NavLink
          id="aboutme"
          className={({ isActive }) =>isActive ? "active link" : "link" }
          to="/projects"
        >
          <a>Projects</a>
        </NavLink>
      </nav>
    </div>
  )
}

export default Root;