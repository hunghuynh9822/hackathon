import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink  } from "react-router-dom";

class Sidebar extends Component {
    render() {
        return (
         
<div className="page-sidebar-wrapper">
  {/* DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing */}
  {/* DOC: Change data-auto-speed="200" to adjust the sub menu slide up/down speed */}
  <div className="page-sidebar navbar-collapse collapse">
    <ul className="page-sidebar-menu page-sidebar-menu-hover-submenu1" data-keep-expanded="false" data-auto-scroll="true" data-slide-speed={200}>
      <li className="heading">
        <h3>CHỨC NĂNG</h3>
      </li>
      <li >
        <NavLink activeClassName="active" to="/find">
          <i className="icon-home" />
          <span className="title">TÌM KIẾM HỢP TÁC</span>
        </NavLink>  
      </li>
      {/* <li >
        <NavLink activeClassName="active" to="/favorite">
          <i className="icon-diamond" />
          <span className="title">ĐỀ TÀI QUAN TÂM</span>
        </NavLink>
      </li> */}
      <li >
        <NavLink activeClassName="active" to="/post">
          <i className="icon-paper-plane" />
          <span className="title">ĐĂNG TIN</span>
        </NavLink>
      </li>
      <li >
        <NavLink activeClassName="active" to="/post_management">
          <i className="icon-globe" />
          <span className="title">QUẢN LÝ TIN</span>
        </NavLink>
      </li>
      <li >
        <NavLink activeClassName="active" to="/exit">
          <i className="icon-key" />
          <span className="title">THOÁT </span>
        </NavLink>
      </li>
    </ul>
    {/* END SIDEBAR MENU */}
    
  </div>
</div>


        );
    }
}

export default Sidebar;