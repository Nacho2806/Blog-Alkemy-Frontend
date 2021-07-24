import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { connect } from 'react-redux';
import swal from 'sweetalert';

class Home extends Component {

    constructor() {
        super();
        this.state = {
          userId:'',  
          title: '',  
          _id: '',
          onePost: [ ],
        };
    }
    
    componentDidMount(){
        this.getPosts();
    }

    getPosts = async () =>{
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        this.props.setPosts(res.data)
    }

    deletePost = async (postId) =>{
        swal({
            title: 'Delete Post',
            text: 'Are you sure you want to delete this post?',
            icon: 'error',
            buttons: ['No', 'Yes']
        }).then(async respuesta =>{
            if (respuesta) {
            await axios.delete('https://jsonplaceholder.typicode.com/posts/' + postId);
            this.props.deletePost(postId)
            swal({text: 'The post was successfully deleted',
            icon: 'success'})
        }
    })
  }

    detailsPost = async (postId) =>{
        const dataPost = await axios.get('https://jsonplaceholder.typicode.com/posts/' + postId);
        this.setState({onePost: dataPost.data});
        swal(
            {title:`${this.state.onePost.title}`,
            text: `${this.state.onePost.body}`,
            icon: 'info'})
    }
    render(){
        return(
            <div className="container">
                        <div className="card-content">
                        <div className="col-md-12">
                            <table className="table table-dark table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">User</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                            { 
                            this.props.posts.map(post => {
                            return (
                                <tr key={post.id}>
                                    <td>{post.userId}</td>
                                    <td>{post.title}</td>
                                    <td>
                                    <button onClick={() => this.detailsPost(post.id)} className="btn btn-primary" style={{margin: '4px'}}>
                                        details
                                    </button>      
                                    <Link to={"/edit/" + post.id} className="btn btn-warning" style={{margin: '4px'}}>
                                        <i className="material-icons">
                                            edit</i>
                                    </Link>        
                                    <button onClick={() => this.deletePost(post.id)} className="btn btn-danger">
                                        <i className="material-icons">delete</i> 
                                    </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                            </tbody>
                            </table>
                        </div>
                    </div>
            </div>  
        )
    }
}            

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setPosts: posts => dispatch({ type: 'GET_POSTS', payload: posts }),
        deletePost: postId => dispatch({ type:'DELETE_POST', payload: postId }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);