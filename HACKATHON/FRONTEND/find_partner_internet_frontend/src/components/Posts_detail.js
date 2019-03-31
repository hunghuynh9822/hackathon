import React, { Component } from 'react';
import renderHTML from 'react-render-html';
import Redirect from 'react-router-dom/Redirect';
import axios from 'axios';
const $ = window.$;
const getPostData=(id)=> axios.get('/api/getPost/'+id)
  .then( (response) => response.data )
  .catch(function (error) {
    console.log(error);
  })

  const sendMail = (id,user_id,sdt,email,content) => 
    ( axios.post('/send',{id,user_id,sdt,email,content})
    .then((resp)=>resp.data))

class Posts_detail extends Component {
  constructor(){
    super();
    this.state ={
      isRedirect:false,
      id:'',
      user_id:'',
      faculty_id:'',
      major_id:'',
      title:'',
      description:'',
      content :'',
      status:'',
      date:''
    };
   }

   handleModalClick = (event) =>{
    // console.log(JSON.stringify(this.state));
    event.preventDefault();
    var {id,user_id,sdt,email,content} = this.state;
    sendMail(id,user_id,sdt,email,content).then((resp)=>{
        console.log(resp);
    })
    this.setState({isRedirect:true})
    
}

    isChange = (event) => {
      console.log(event.target);
      var name = event.target.name;
      var value = event.target.value;
      console.log(name);
      
      this.setState({
          [name]:value
      });
      
      // console.log(title);
      // console.log(description);
    }
   
   
   componentDidMount() {
     console.log("Will mount " + this.props.match.params.id);
      getPostData(this.props.match.params.id).then((resp)=>{        
        if(resp != undefined){
        resp.map((x)=>{
          this.setState({
            id:x.id,
            user_id:x.user_id,
            faculty_id:x.faculty_id,
            major_id:x.major_id,
            title:x.title,
            description:x.description,
            content :x.content,
            status:x.status,
            date:x.date
          })
        })
      }
        
        console.log(this.state.content);
        
      })
  }
    render() {
      if(this.state.isRedirect){
        return <Redirect to="/find" />
      }
        // console.log(this.props.match.params.id);
        return (
            <div className="page-content-wrapper">
            <div className="page-content">
              {/* BEGIN PAGE HEAD */}
              <div className="page-head">
                {/* BEGIN PAGE TITLE */}
                <div className="page-title">
                  <h1>THÔNG TIN CHI TIẾT ĐỀ TÀI</h1>
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
                  <div className="portlet light ">
                    <div className="portlet-title">
                      <div className="col-md-2 col-logo">
                        <span className="center-block text-center logo-wrapper">
                          <a className="track-event clickable" data-evt-type="view-other-jobs">
                            <img src="https://images.vietnamworks.com/pictureofcompany/d0/3083684.jpg" alt="Việc làm MDA E&C Co.,ltd tuyển dụng" className="logo img-responsive" />
                          </a>
                        </span>
                      </div>
                      <div className="col-md-10 col-content-wrapper">
                        <div className="caption caption-md" style={{marginBottom: '15px'}}>
                          <i className="icon-bar-chart theme-font-color hide" />
                          <span className="caption-subject theme-font-color bold uppercase" style={{fontSize: '18px'}}>{this.state.title}</span>
                          <span className="caption-helper hide">weekly stats...</span>
                          <div className="row" style={{fontSize: '16px'}}>
                            <div className="col-sm-12 company-name">
                              Người đăng:
                              <span style={{fontWeight: 'bold'}}>
                                Phạm Ngọc Diêu
                              </span>
                              <span className="gray-light m-l-xs m-r-xs hidden-xs">-</span>
                              <span className="company-location">
                                Khoa Công nghệ thông tin - Chuyên ngành Công nghệ phần
                                mềm
                              </span>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-12">
                              <span className="view gray-light" style={{color: '#dd1212', fontWeight: 'bold'}}>
                                100 lượt xem
                              </span>
                              <span className="gray-light m-l-xs m-r-xs">-</span>
                              <span className="expiry gray-light">Ngày đăng: 20/03/2019</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="portlet-body" style={{margin: '20px', marginTop: '-10px', textAlign: 'justify'}}>
                      <div className="row list-separated">
                        <div className="row" style={{marginLeft: 'auto'}}>
                          <a type="button" className="btn " style={{width: '100px', backgroundColor: '#dd3416', color: 'white', float: 'right', marginRight: '10px'}} data-target="#exampleModal" data-toggle="modal">Kết
                            nối</a>
                          <h2 style={{fontSize: '21px', fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'Roboto,Arial,sans-serif', marginTop: '5px', color: '#5b9bd1', marginBottom: '10px'}}>MÔ TẢ Ý TƯỞNG</h2>
                          <div className="description" style={{color: '#555', fontSize: '15px'}}>
                            {this.state.description}
                          </div>
                          <h2 style={{fontSize: '21px', fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'Roboto,Arial,sans-serif', marginTop: '5px', color: '#5b9bd1', marginBottom: '10px'}}>NỘI DUNG Ý TƯỞNG</h2>
                          <div className="description" style={{color: '#555', fontSize: '15px'}}>
                            {renderHTML(this.state.content)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END PORTLET*/}
            {/* END PAGE CONTENT INNER */}

            <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
        <h4 className="modal-title" id="exampleModalLabel" style={{fontSize: '20px', fontWeight: 'bold'}}>Nội dung
          liên hệ</h4>
      </div>
      <div className="modal-body">
        <form onsubmit="return validate_form()">
          <div className="form-group">
            <label htmlFor="recipient-number" className="control-label">Số điện thoại:</label>
            <input type="text" className="form-control" onblur="telephoneCheck()" id="recipient-number" name="sdt"/>
            <p className="demo" id="validate_number" style={{color: 'red'}} />
          </div>
          <div className="form-group">
            <label htmlFor="recipient-number" className="control-label">Email liên lạc khác (Chủ trang tin sẽ
              liên lạc với bạn bằng mail này)</label>
            <input type="text" className="form-control" onblur="ValidateEmail()" id="recipient-email" name="email" />
            <p className="demo" id="validate_mail" style={{color: 'red'}} />
          </div>
          <div className="form-group">
            <label htmlFor="message-text" className="control-label">Nội dung:</label>
            <textarea className="form-control" id="message-text" rows={5} required defaultValue={""} name="content" />
          </div>
          <div className="modal-footer">
            <button type="submit" onClick={(event)=>this.handleModalClick(event)} className="btn btn-primary checkmobile">Gửi</button>
            <button type="button" className="btn btn-default" data-dismiss="modal">Hủy bỏ</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>



          </div>
          
        );
    }
}

export default Posts_detail;