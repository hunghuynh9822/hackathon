import React, { Component } from 'react';
import Redirect from 'react-router-dom/Redirect';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';


const editPostAction = (id,title,description,content) => 
    ( axios.post('/edit',{id,title,description,content})
    .then((resp)=>resp.data));
  
const getPostData=(id)=> axios.get('/api/getPost/'+id)
    .then( (response) => response.data )
    .catch(function (error) {
      console.log(error);
    })

class PostPageEdit extends Component {
  
    constructor(props){
        super(props);
        this.state = {
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
        }
    }
    handleClick = (event) =>{
        // console.log(JSON.stringify(this.state));
        event.preventDefault();
        var {id,title,description,content} = this.state;
        editPostAction(id,title,description,content).then((resp)=>{
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
       });
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
        <h1>ĐĂNG TIN TÌM EM</h1>
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
      <input  onChange={(event)=>this.isChange(event)} type="text" className="form-control" id="title" name="title" value={this.state.title}/>
    </div>
    <div className="page-head">
      {/* BEGIN PAGE TITLE */}
      <div className="page-title">
        <h1>Mô tả</h1>
      </div>
      {/* END PAGE TITLE */}
    </div>
    <div className="form-group">
      <textarea onChange={(event)=>this.isChange(event)} className="form-control rounded-0" id="description" name="description" rows={3} value={this.state.description} />
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
        initialValue={this.state.content}
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
        <button type="reset" onClick={(event)=>this.handleClick(event)} className="btn" style={{width: '100px', backgroundColor: 'rgb(22, 158, 244)', color: 'white'}}>SỬA TIN</button>
      </form>
    </div>
    {/* END PAGE HEAD */}
  </div>
</div>

        );
    }
}

export default PostPageEdit;