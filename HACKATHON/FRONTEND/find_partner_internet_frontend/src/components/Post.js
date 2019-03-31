import React, { Component } from 'react';
import renderHTML from 'react-render-html';
class Post extends Component {

  constructor(props){
    super(props);
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

  componentWillMount() {
    var image_tracker = 'orange';

		function change() {
			var image = document.getElementById('circle');
			if (image_tracker == 'orange') {
				image.src = 'images/goldStar.png';
				image_tracker = 'blue';
			}
			else {
				image.src = 'images/blackStar.png';
				image_tracker = 'orange';
			}
		}
  }
  
  
    render() {
        return (
          <div className="portlet light ">
            <div className="col-md-2 col-sm-12">
              <img src="./images/SPKT.PNG" style={{width: '100%', height: '100%'}} />
            </div>
            <div className="col-md-9 col-sm-12">
              <div className="caption caption-md" style={{fontSize: '18px'}}>
                <i className="icon-bar-chart theme-font-color hide" />
                <span className="caption-subject theme-font-color bold uppercase"  style={{float: 'left'}}>{this.props.title}</span><br/>
                <span className="caption-helper hide">weekly stats...</span>
              </div>
              <div className="btn-control" style={{marginTop: '5px'}}>
                <a href={"/post_detail/"+this.changeURL(this.props.title)+"."+this.props.postId+".html"} type="button" className="btn " style={{float: 'left', width: '100px', marginRight: '10px', backgroundColor: '#35aa47', color: 'white'}}>Xem</a>
                <a type="button" className="btn " style={{float: 'left', width: '100px', backgroundColor: 'rgb(22, 158, 244)', color: 'white'}} data-target="#exampleModal" data-toggle="modal">Kết nối</a>
              </div>
              <br/>
              <br></br>
              <div className="infor">
                <form className="form-horizontal" action="/action_page.php">
    
                  <div className="form-group col-md-5">
                    <label className="control-label " style={{float: 'left', color: 'black', fontWeight: 'bold', paddingRight: '0px', paddingLeft: '0px', textAlign: 'left'}}>Người
                      đăng: <span style={{color: 'green', marginLeft: '15px'}}>Nguyễn Hữu
                        Tiến</span> </label>
                  </div>
                  <div className="form-group col-md-5">
                    <label className="control-label " style={{float: 'left', color: 'black', fontWeight: 'bold', paddingRight: '0px', paddingLeft: '0px', textAlign: 'left'}}>Ngày
                      đăng: <span style={{color: 'red', marginLeft: '15px'}}>{this.props.date.substring(0, 10)}</span>
                    </label>
                  </div>
                </form>
              </div><br></br><br></br>
              <div className="description" style={{float: 'left', textAlign: 'justify'}}>
              {/* {renderHTML(this.props.content)} */}
              {this.props.description}
              </div>
            </div>
            <div className="portlet-title" style={{border: '0px', marginBottom: '0px'}}>
            </div>
        </div>
        
        );
    }
}

export default Post;