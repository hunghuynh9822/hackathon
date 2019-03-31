import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
          <div className="page-header navbar navbar-fixed-top">
          {/* BEGIN HEADER INNER */}
          <div className="page-header-inner">
            {/* BEGIN LOGO */}
            <div className="page-logo">
              <a href="index.html">
                <img src="/assets/admin/layout4/img/logo-light.png" alt="logo" className="logo-default" style={{height: '70px', marginTop: '0px'}} />
              </a>
              <div className="menu-toggler sidebar-toggler">
                {/* DOC: Remove the above "hide" to enable the sidebar toggler button on header */}
              </div>
            </div>
            {/* END LOGO */}
            {/* BEGIN RESPONSIVE MENU TOGGLER */}
            <a href="javascript:;" className="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse">
            </a>
            {/* END RESPONSIVE MENU TOGGLER */}
            {/* BEGIN PAGE ACTIONS */}
            {/* DOC: Remove "hide" class to enable the page header actions */}
            <div className="page-actions">
            </div>
            {/* END PAGE ACTIONS */}
            {/* BEGIN PAGE TOP */}
            <div className="page-top">
              {/* BEGIN TOP NAVIGATION MENU */}
              <div className="top-menu">
                <ul className="nav navbar-nav pull-right">
                  {/* END TODO DROPDOWN */}
                  {/* BEGIN USER LOGIN DROPDOWN */}
                  {/* DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte */}
                  <li className="dropdown dropdown-user dropdown-dark">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                      <img alt className="img-circle" src="/assets/admin/layout4/img/avatar9.jpg" />
                      <span className="username username-hide-on-mobile">
                        Nguyễn Hữu Tiến [16110474]
                      </span>
                      {/* DOC: Do not remove below empty space(&nbsp;) as its purposely used */}
                    </a>
                    <ul className="dropdown-menu dropdown-menu-default">
                      <li>
                        <a href="extra_profile.html">
                          <i className="icon-user" /> My Profile </a>
                      </li>
                      <li>
                        <a href="page_calendar.html">
                          <i className="icon-calendar" /> My Calendar </a>
                      </li>
                      <li>
                        <a href="inbox.html">
                          <i className="icon-envelope-open" /> My Inbox <span className="badge badge-danger">
                            3 </span>
                        </a>
                      </li>
                      <li>
                        <a href="page_todo.html">
                          <i className="icon-rocket" /> My Tasks <span className="badge badge-success">
                            7 </span>
                        </a>
                      </li>
                      <li className="divider">
                      </li>
                      <li>
                        <a href="extra_lock.html">
                          <i className="icon-lock" /> Lock Screen </a>
                      </li>
                      <li>
                        <a href="login.html">
                          <i className="icon-key" /> Log Out </a>
                      </li>
                    </ul>
                  </li>
                  {/* END USER LOGIN DROPDOWN */}
                </ul>
              </div>
              {/* END TOP NAVIGATION MENU */}
            </div>
            {/* END PAGE TOP */}
          </div>
          {/* END HEADER INNER */}
        </div>
        

        );
    }
}

export default Header;