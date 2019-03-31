import React, { Component } from 'react';
import axios from 'axios';

const editStatusDeactive=(id)=> (axios.get('/api/editStatusDeactive/'+id)
.then( (response) => response.data ))
const editStatusActive=(id)=> (axios.get('/api/editStatusActive/'+id)
.then( (response) => response.data ))

class My_post extends Component {
    constructor(props){
        super(props);
        this.state = {
          status : this.props.status
        }
      }
      handleClickChangeStatusDeactive = (event) =>{
        // console.log(JSON.stringify(this.state));
        
        event.preventDefault();
        editStatusDeactive(this.props.id).then((resp)=>{
         this.setState({
          status : false,
         })
        })    
      }
      handleClickChangeStatusActive = (event) =>{
        // console.log(JSON.stringify(this.state));
        
        event.preventDefault();
        editStatusActive(this.props.id).then((resp)=>{
          this.setState({
            status : true,
          })
        })    
      }
    changeURL = (str) => {
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();     
     
        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');
     
        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');
     
        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');
     
        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');
     
        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');
     
        // return
        return str;
      }
      componentDidMount() {
        this.setState({
          status : this.props.status
        })
      }
      

      
    render() {
        let button
        if (this.state.status) {
            button = <a onClick={(event)=> this.handleClickChangeStatusDeactive(event)}  type="button" className="btn" style={{width: '100px', float: 'left', backgroundColor: 'red', color: 'white'}}>Deactive</a>;
          } else {
            button = <a onClick={(event)=> this.handleClickChangeStatusActive(event)} type="button" className="btn" style={{width: '100px', float: 'left', backgroundColor: 'rgb(28, 184, 65)', color: 'white'}}>Active</a>;
          }
        return (
            <div className="portlet light ">
                    <div className="col-md-2 col-sm-12">
                      <img src="./images/SPKT.PNG" style={{width: '100%', height: '100%'}} />
                    </div>
                    <div className="col-md-9 col-sm-12">
                      <div className="caption caption-md" style={{fontSize: '18px'}}>
                        <i className="icon-bar-chart theme-font-color hide" />
                        <span className="caption-subject theme-font-color bold uppercase" style={{float: 'left'}}  >{this.props.title}</span>
                        <span className="caption-helper hide">weekly stats...</span>
                      </div><br></br><br></br>
                      <div className="btn-control" style={{marginTop: '5px'}}>
                        <a type="button" href={"/post_manage/edit/"+this.changeURL(this.props.title)+"."+this.props.id+".html"} className="btn" style={{marginRight: '10px' ,width: '100px', backgroundColor: 'rgb(223, 117, 20)', float: 'left',color: 'white'}}>Sửa</a>
                        {/* <a type="button" className="btn" style={{width: '100px',float: 'left', backgroundColor: 'rgb(202, 60, 60)',marginRight: '10px' , color: 'white'}} data-target="#exampleModal" data-toggle="modal">Xóa</a> */}
                        {button}
                        
                      </div><br></br><br></br>
                      <div className="infor">
                        <form className="form-horizontal" action="/action_page.php">
                          <div className="form-group col-md-5">
                            <label className="control-label " style={{float: 'left', color: 'black', fontWeight: 'bold', paddingRight: '0px', paddingLeft: '0px', textAlign: 'left'}}>Lượt
                              xem:
                              <span style={{color: 'black', marginLeft: '15px'}}>{this.props.view}</span> </label>
                          </div>
                          <div className="form-group col-md-5">
                            <label className="control-label " style={{ float: 'left', color: 'black', fontWeight: 'bold', paddingRight: '0px', paddingLeft: '0px', textAlign: 'left'}}>Ngày
                              đăng: <span style={{color: 'red', marginLeft: '15px'}}>{this.props.date.substring(0,10)}</span>
                            </label>
                          </div>
                        </form>
                      </div><br></br><br></br>
                      <div className="description" style={{float: 'left', textAlign: 'justify'}}>
                        <p style={{float: 'left', textAlign: 'justify'}}>{this.props.description}</p>
                      </div>
                    </div>
                    <div className="portlet-title" style={{border: '0px', marginBottom: '0px'}}>
                    </div>
                  </div>
        );
    }
}

export default My_post;