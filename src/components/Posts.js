import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'

class Posts extends Component {

    constructor(){
        super()
        this.state={
          title: '',
          body: '',
          userId: '',
          _id: '',
          editing: false
        }
    }

    async componentDidMount(){
        if (this.props.match.params.id) {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id);
            this.setState({
                title: res.data.title,
                body: res.data.body,
                userId: res.data.userId,
                editing: true
            });
        }
    }

    onInputChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = async (e) =>{
        e.preventDefault();
        if(this.state.editing){
            const updatedPost = {
                title: this.state.title,
                body: this.state.body,
            };
            await axios.put('https://jsonplaceholder.typicode.com/posts' + this.state._id, updatedPost);
            this.props.editPost(this.state._id)
            this.props.updatePost(updatedPost)
        } else{
            const newPost = {
                title: this.state.title,
                body: this.state.body,
                userId: this.state.userId
            };
            await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
            this.props.newPost(newPost)
        }
    }
    
    render(){
        return(
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>Create a New Post</h4>
                    <form onSubmit={this.onSubmit}>
                        {/* Post Title */}
                        <div className="form-group">                            
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Title"
                                onChange={this.onInputChange}
                                name="title"
                                value={this.state.title}
                                required></input>
                        </div>
                        {/* Post Description */}
                        <div className="form-group">
                            <textarea
                                type="text"
                                className="form-control"
                                placeholder="Description"
                                name="body"
                                onChange={this.onInputChange}
                                value={this.state.body}
                                required>
                            </textarea>
                        </div>
                        {/* User */}
                        <div className="form-group">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Number of username"
                                onChange={this.onInputChange}
                                name="userId"
                                value={this.state.userId}
                                required>
                            </input>
                        </div>
                        <button className="btn btn-primary btn-block">
                            Save Post
                        </button>
                    </form>
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
        newPost: newPost => dispatch({ type:'ADD_POST', payload: newPost }),
        editPost: editPost => dispatch({ type:'EDIT_POST', payload: editPost }),
        updatePost: editPost => dispatch({ type:'UPDATE_POST', payload: editPost })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);