/**
 * Created by PD on 04-06-2017.
 */
import React,{Component} from 'React'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPost,deletePost} from '../actions/index';
class PostsShow extends Component{
    componentDidMount(){
        const id = this.props.match.params.id//params.id ka mtlb wo id jo url me pass hua hai
        this.props.fetchPost(id);
    }
    onDeleteClick(){
        const id = this.props.match.params.id
        this.props.deletePost(id, () =>this.props.history.push('/'));
    }
    render(){
        if(!this.props.post){
            return(
                <div>Loading...</div>
            )
        }
        return(
           <div>
               <Link to="/">Back to HomePage</Link>
               <button
                   className="btn btn-danger pull-xs-right"
                   onClick={this.onDeleteClick.bind(this)}
               >
                   Delete Post
               </button>
               <h1>{this.props.post.title}</h1>
               <h4>{this.props.post.categories}</h4>
               <p>{this.props.post.content}</p>

           </div>
        )
    }
}
function mapStateToProps(state){

}

function mapStateToProps(state,ownProps){
    return ({
        post:state.post[ownProps.match.params.id],

    })
}
export default connect(mapStateToProps,{fetchPost,deletePost})(PostsShow);