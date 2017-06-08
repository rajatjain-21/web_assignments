/**
 * Created by PD on 04-06-2017.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';
import {Link} from 'react-router-dom';  //link is just an anchor tag of html with no default functionality
import _ from 'lodash';
class PostsIndex extends Component{
    componentDidMount(){
        this.props.fetchPosts();
    }
    renderList(){
        return(
          _.map(this.props.post, (post) =>{
              return(
                  <Link to={`/post/${post.id}`}>
                    <li className="list-group-item" key={post.id}>
                        {post.title}
                    </li>
                  </Link>
              );
          })
        );
    }

    render(){
        return(
            <div>
                <div className='text-xs-right'>
                    <Link className="btn btn-primary"to="/post/new">Add New Post</Link>
                </div>
                <h3>Posts</h3>
                <ul className='list-group'>
                    {this.renderList()}
                </ul>
            </div>
        );
    }
}
/*function mapStateToProps(state){
    return {post:state.post};
}*/
function mapStateToProps({post}){
    return {post};
}
export default connect(mapStateToProps,{fetchPosts})(PostsIndex);
