import React, { Component } from 'react';
import Post from './Post';
import axios from 'axios';
const getPostData=()=> axios.get('/getPost')
  .then( (response) => response.data )
  .catch(function (error) {
    console.log(error);
  })

const getFaculty=()=> axios.get('/api/getFaculty')
.then( (response) => response.data )
.catch(function (error) {
  console.log(error);
})

  const getMajor=()=> axios.get('/api/getMajor')
  .then( (response) => response.data )
  .catch(function (error) {
    console.log(error);
  })

  const submitFilter=(title,f,m)=>(axios.post('/api/getFilter',{title,f,m})
  .then( (response) => response.data ))

class Content extends Component {
  constructor(){
    super();
    this.state ={
      data: null,
      faculty:null,
      major:null,
      f:0,
      m:0,
      title:'',
    };
   }
   componentWillMount() {
    if(this.state.data === null){
      getPostData().then((res)=>{
        this.setState({
          data : res
        })
      });
    }
    if(this.state.faculty === null){
      getFaculty().then((res)=>{
        this.setState({
          faculty : res
        })
      });
    }
    if(this.state.major === null){
      getMajor().then((res)=>{
        this.setState({
          major : res
        })
      });
    }
  }
  printData = () => {
    if(this.state.data != null){
      return this.state.data.map((value,key)=>(
      <Post key={key} postId={value.id} title={value.title} description={value.description} content={value.content} date={value.date}/>
      ))
    }
  }

handleFilterClick = (event) =>{
  // console.log(JSON.stringify(this.state));
  event.preventDefault();
  var {title,f,m} = this.state;
  submitFilter(title,f,m).then((resp)=>{
      this.setState({
        data:resp
      })
  })    
}
isChange = (event) => {
    console.log(event.target);
    var name = event.target.name;
    var value = event.target.value;
    console.log(name);
    
    this.setState({
        [name]:value
    });
}
    render() {
      let selectFaculty;
      
      if(this.state.faculty!==null){
        selectFaculty = (
          <div className="col-md-3">
            <select name="f" onChange={(event)=>this.isChange(event)} className="btn btn-primary dropdown-toggle" style={{marginBottom: '5px', height: '35px', width: '100%', backgroundColor: 'white', color: 'black'}}>
              <option value="0">Chọn Khoa</option>
              {this.state.faculty.map((value,key)=> (
                <option key={key} value={value.id}>{value.name}</option>
              ))}
            </select>
          </div>
        );
      }
      let selectMajor;
      if(this.state.major!==null){
        selectMajor = (
          <div className="col-md-3">
            <select name="m" onChange={(event)=>this.isChange(event)} className="btn btn-primary dropdown-toggle" style={{marginBottom: '5px', height: '35px', width: '100%', backgroundColor: 'white', color: 'black'}}>
              <option value="0">Chọn Chuyên ngành</option>
              {this.state.major.map((value,key)=> (
                <option key={key} value={value.id}>{value.name}</option>
              ))}
            </select>
          </div>
        );
      }
      
      // console.log(this.state.data);
        return (
            <div className="page-content-wrapper">
  <div className="page-content">
    {/* BEGIN PAGE HEAD */}
    <div>
  <div className="page-head">
    {/* BEGIN PAGE TITLE */}
    <div className="page-title">
      <h1>DANH SÁCH ĐỀ TÀI CẦN TÌM HỢP TÁC </h1>
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
  <div className="row" style={{margin: '10px'}}>
  <div className="col-md-3">
    <div className="dropdown">
      <input name="title" onChange={(event)=>this.isChange(event)} type="text" placeholder="Cái này điền được nha ..." style={{marginBottom: '5px', height: '35px', width: '100%', borderRadius: '4px', backgroundColor: 'white', padding: '5px', border: '0px'}} />
    </div>
  </div>
  {selectFaculty}
  {selectMajor}
  <div className="col-md-3">
    <button onClick={(event)=>this.handleFilterClick(event)} className="btn btn-primary " type="button" style={{marginBottom: '5px', width: '80%', backgroundColor: '#35aa47', color: 'white'}}>Tìm kiếm
    </button>
  </div>
</div>
</div>


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

export default Content;