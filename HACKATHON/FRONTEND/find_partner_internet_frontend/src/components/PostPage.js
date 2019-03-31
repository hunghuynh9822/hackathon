import React, { Component } from 'react';
import Redirect from 'react-router-dom/Redirect';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';


const addPostAction = (title,description,content) => 
    ( axios.post('/add',{title,description,content})
    .then((resp)=>resp.data))

class PostPage extends Component {
  
    constructor(props){
        super(props);
        this.state = {
          isRedirect:false,
            title : '',
            description : '',
            content : ''
        }
    }
    handleEditorChange = (e) => {
        console.log('Content was updated:', e.target.getContent());
        this.setState({
            content : e.target.getContent()
        })
      }
    handleClick = (event) =>{
        // console.log(JSON.stringify(this.state));
        event.preventDefault();
        var {title,description,content} = this.state;
        addPostAction(title,description,content).then((resp)=>{
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
    }
    
    render() {
      if(this.state.isRedirect){
        return <Redirect to="/find" />
      }
        return (
<div className="page-content-wrapper">
  <div className="page-content">
    {/* BEGIN PAGE HEAD */}
    <div className="page-head">
      {/* BEGIN PAGE TITLE */}
      <div className="page-title">
        <h1>ĐĂNG TIN TÌM CỘNG TÁC</h1>
      </div>
      {/* END PAGE TITLE */}
    </div>
    <div className="page-head">
      {/* BEGIN PAGE TITLE */}
      <div className="page-title">
        <h1>Tiêu đề</h1>
      </div>
      {/* END PAGE TITLE */}
    </div>
    <div className="form-group">
      <input  onChange={(event)=>this.isChange(event)} type="text" className="form-control" id="title" name="title"/>
    </div>
    <div className="page-head">
      {/* BEGIN PAGE TITLE */}
      <div className="page-title">
        <h1>Mô tả</h1>
      </div>
      {/* END PAGE TITLE */}
    </div>
    <div className="form-group">
      <textarea onChange={(event)=>this.isChange(event)} className="form-control rounded-0" id="description" name="description" rows={3} defaultValue={""} />
    </div>
    {/* END PAGE TITLE */}
    <div className="page-head">
      {/* BEGIN PAGE TITLE */}
      <div className="page-title">
        <h1>Nội dung</h1>
      </div>
      {/* END PAGE TITLE */}
    </div>
    <div className="form-group">
      <div className="col-md-12" style={{padding: '0px'}}>
        <form id="get-data-form" method="post">
        <Editor
        initialValue="<p>This is the initial content of the editor</p>"
        init={{
          plugins: 'link image code',
          toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
        }}
        onChange={this.handleEditorChange}
      />
        </form>
        <div id="data-container">
        </div>
        {/* javascript */}
      </div>
    </div>
    <div className="col-md-6">
      <form id="get-data-form" method="post">
        <button type="reset" onClick={(event)=>this.handleClick(event)} className="btn" style={{width: '100px', backgroundColor: 'rgb(22, 158, 244)', color: 'white'}}>ĐĂNG
          TIN</button>
      </form>
    </div>
    {/* END PAGE HEAD */}
  </div>
</div>

        );
    }
}

export default PostPage;