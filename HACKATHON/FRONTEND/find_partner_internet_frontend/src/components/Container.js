import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Sidebar from './Sidebar';
import Content from './Content';
import PostPage from './PostPage';
import Posts_detail from './Posts_detail';
import Edit_news from './Edit_news';
import Post_management from './Post_management';
import PostPageEdit from './PostPageEdit';

class Container extends Component {
    render() {
        return ( 
            <div className="page-container">
                <Sidebar/>
                <Route exact path="/find" component={Content} />
                <Route path="/post" component={PostPage} />
                <Route path="/post_detail/:slug.:id.html" component={Posts_detail}/>
                <Route path="/edit_news" component={Edit_news}/>
                <Route path="/post_management" component={Post_management}/>
                <Route path="/post_manage/:mode/:slug.:id.html" component={PostPageEdit}/>
            </div>
        );
    }
}

export default Container;