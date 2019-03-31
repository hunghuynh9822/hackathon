import React, { Component } from 'react';

class Logo extends Component {
    render() {
        return (
            <div className="page-logo">
                <a href="/">
                <img src="assets/admin/layout4/img/logo-light.png" alt="logo" className="logo-default" style={{height: '70px', marginTop: '0px'}} />
                </a>
                <div className="menu-toggler sidebar-toggler">
                {/* DOC: Remove the above "hide" to enable the sidebar toggler button on header */}
                </div>
            </div>
        );
    }
}

export default Logo;