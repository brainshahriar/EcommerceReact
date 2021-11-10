import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class blog extends Component{

    state={
        posts:[],
    }
    componentDidMount(){

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
                this.setState({posts:response.data})
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
            }

    render(){

const posts = this.state.posts;
const allposts = posts.map((post,idx)=> {
            return (
                <div>
                    <a href="" key={idx}>{post.title}</a><br></br>
                    <p>{post.body}</p>
                </div>
            );
});


        return (
            <div>
                <h1>hi</h1>
                <Link to="/writepost">Add new </Link>
                <div class="media">
                <div class="media-body text-center">
                    {allposts}
                </div>
                </div>
            </div>
        );
    }
}
export default blog