import React, { Component } from 'react';

class Edit_news extends Component {
    render() {
        return (
            <div className="page-content-wrapper">
  <div className="page-content">
    {/* BEGIN PAGE HEAD */}
    <div className="page-head">
      {/* BEGIN PAGE TITLE */}
      <div className="page-title">
        <h1>ĐĂNG TIN TÌM AI ĐÓ</h1>
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
      <input type="text" className="form-control" id="usr" />
    </div>
    <div className="page-head">
      {/* BEGIN PAGE TITLE */}
      <div className="page-title">
        <h1>Mô tả</h1>
      </div>
      {/* END PAGE TITLE */}
    </div>
    <div className="form-group">
      <textarea className="form-control rounded-0" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
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
          <textarea className="tinymce" id="texteditor" defaultValue={""} />
        </form>
        <div id="data-container">
        </div>
        {/* javascript */}
      </div>
    </div>
    <div className="col-md-6">
      <style dangerouslySetInnerHTML={{__html: "\n\t\t\t\t\t\t.btn-file {\n\t\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t\t\toverflow: hidden;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.btn-file input[type=file] {\n\t\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\t\ttop: 0;\n\t\t\t\t\t\t\tright: 0;\n\t\t\t\t\t\t\tmin-width: 100%;\n\t\t\t\t\t\t\tmin-height: 100%;\n\t\t\t\t\t\t\tfont-size: 100px;\n\t\t\t\t\t\t\ttext-align: right;\n\t\t\t\t\t\t\tfilter: alpha(opacity=0);\n\t\t\t\t\t\t\topacity: 0;\n\t\t\t\t\t\t\toutline: none;\n\t\t\t\t\t\t\tbackground: white;\n\t\t\t\t\t\t\tcursor: inherit;\n\t\t\t\t\t\t\tdisplay: block;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t#img-upload {\n\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t}\n\t\t\t\t\t" }} />
      <div className="form-group" style={{marginLeft: '0px'}}>
        <label style={{marginTop: '10px', color: 'gray', fontSize: '16px'}}>Ảnh đại diện</label>
        <div className="input-group">
          <span className="input-group-btn">
            <span className="btn btn-default btn-file">
              Đổi ảnh... <input type="file" id="imgInp" />
            </span>
          </span>
          <input type="text" className="form-control" readOnly />
        </div>
        <img id="img-upload" />
      </div>
      <form id="get-data-form" method="post">
        <button type="submit" className="btn" style={{width: '100px', backgroundColor: 'rgb(22, 158, 244)', color: 'white'}}>
          LƯU
        </button>
      </form>
    </div>
    {/* END PAGE HEAD */}
  </div>
</div>

        );
    }
}

export default Edit_news;