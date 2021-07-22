import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Welcome extends Component {
  render() {
    return (
      <div className="container p-4">
        <div className="card card-body">
            <h1 className="display-4"> Welcome to Alkemy's blog</h1>
            <p className="lead">The blog with the largest global reach</p>
            <hr className="mt-4"/>
            <p>A blog where you can freely express your feelings and opinions on any topic of current 
                interest or interest. Start today!.</p>
            <Link to="/create" className="btn btn-secondary btn-block"> Create a new Post Now!</Link>
        </div>
     </div>
    )
  }
}