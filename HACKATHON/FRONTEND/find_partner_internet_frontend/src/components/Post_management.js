import React, { Component } from 'react';
import My_post from './My_post';
import axios from 'axios';
const getPostData=(user_id)=> axios.get('api/getPostUser/'+user_id)
  .then( (response) => response.data )
  .catch(function (error) {
    console.log(error);
  })



class Post_management extends Component {
  constructor(){
    super();
    this.state ={data: null};
   }

   
   componentWillMount() {
    if(this.state.data === null){
      getPostData(1).then((res)=>{
        // console.log(res);
        this.setState({
          data : res
        })
      })
    }
  }
  printData = () => {
    if(this.state.data != null){
      return this.state.data.map((value,key)=>(
        <My_post key={key} 
        id = {value.id}
        title = {value.title}
        description = {value.description}
        content = {value.content}
        date = {value.date}
        view = {value.view}
        status = {value.status}
        />
      ))
    }
  }
    render() {
        return (
            <div className="page-content-wrapper">
            <div className="page-content">
              {/* BEGIN PAGE HEAD */}
              <div className="page-head">
                {/* BEGIN PAGE TITLE */}
                <div className="page-title">
                  <h1>QUẢN LÝ ĐỀ TÀI CỦA BẠN</h1>
                </div>
                {/* END PAGE TITLE */}
                {/* BEGIN PAGE TOOLBAR */}
                <div className="page-toolbar">
                  {/* BEGIN THEME PANEL */}
                  <div className="btn-group btn-theme-panel">
                    <a href="javascript:;" className="btn dropdown-toggle" data-toggle="dropdown">
                      <i className="icon-settings" />
                    </a>
                    <div className="dropdown-menu theme-panel pull-right dropdown-custom hold-on-click">
                      <div className="row">
                        <div className="col-md-4 col-sm-4 col-xs-12">
                          <h3>THEME</h3>
                          <ul className="theme-colors">
                            <li className="theme-color theme-color-default active" data-theme="default">
                              <span className="theme-color-view" />
                              <span className="theme-color-name">Dark Header</span>
                            </li>
                            <li className="theme-color theme-color-light" data-theme="light">
                              <span className="theme-color-view" />
                              <span className="theme-color-name">Light Header</span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-8 col-sm-8 col-xs-12 seperator">
                          <h3>LAYOUT</h3>
                          <ul className="theme-settings">
                            <li>
                              Theme Style
                              <select className="layout-style-option form-control input-small input-sm">
                                <option value="square" selected="selected">Square corners</option>
                                <option value="rounded">Rounded corners</option>
                              </select>
                            </li>
                            <li>
                              Layout
                              <select className="layout-option form-control input-small input-sm">
                                <option value="fluid" selected="selected">Fluid</option>
                                <option value="boxed">Boxed</option>
                              </select>
                            </li>
                            <li>
                              Header
                              <select className="page-header-option form-control input-small input-sm">
                                <option value="fixed" selected="selected">Fixed</option>
                                <option value="default">Default</option>
                              </select>
                            </li>
                            <li>
                              Top Dropdowns
                              <select className="page-header-top-dropdown-style-option form-control input-small input-sm">
                                <option value="light">Light</option>
                                <option value="dark" selected="selected">Dark</option>
                              </select>
                            </li>
                            <li>
                              Sidebar Mode
                              <select className="sidebar-option form-control input-small input-sm">
                                <option value="fixed">Fixed</option>
                                <option value="default" selected="selected">Default</option>
                              </select>
                            </li>
                            <li>
                              Sidebar Menu
                              <select className="sidebar-menu-option form-control input-small input-sm">
                                <option value="accordion" selected="selected">Accordion</option>
                                <option value="hover">Hover</option>
                              </select>
                            </li>
                            <li>
                              Sidebar Position
                              <select className="sidebar-pos-option form-control input-small input-sm">
                                <option value="left" selected="selected">Left</option>
                                <option value="right">Right</option>
                              </select>
                            </li>
                            <li>
                              Footer
                              <select className="page-footer-option form-control input-small input-sm">
                                <option value="fixed">Fixed</option>
                                <option value="default" selected="selected">Default</option>
                              </select>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* END THEME PANEL */}
                </div>
                {/* END PAGE TOOLBAR */}
              </div>
              {/* END PAGE HEAD */}
              {/* BEGIN PAGE BREADCRUMB */}
              <ul className="page-breadcrumb breadcrumb hide">
                <li>
                  <a href="#">Home</a><i className="fa fa-circle" />
                </li>
                <li className="active">
                  Dashboard
                </li>
              </ul>
              {/* END PAGE BREADCRUMB */}
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  {/* BEGIN PORTLET*/}
                  {this.printData()}
                  {/* END PORTLET*/}
                </div>
              </div>
            </div>
            {/* END PAGE CONTENT INNER */}
          </div>
          
        );
    }
}

export default Post_management;