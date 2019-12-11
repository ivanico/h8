import React from 'react';
import axios from "axios";
import { API_URL } from "../constants";
import { Users } from './Users';
import { Route, Switch, Link } from "react-router-dom";
import { Gallery } from './Gallery';


export class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      photos:[]
    };

    console.log("This comes from the Constructorot");
  }

  FetchPosts = () => {
    axios.get(API_URL + "/posts")
      .then(res => {
        this.setState({
          posts: res.data
        })
      }).catch(err => {
        console.error("Error in: => ", err);
      });
  }

  FetchPhotos = () =>{
    axios.get(API_URL + "/photos")
      .then(res => {
        this.setState({
          photos: res.data
        })
      })
  }

  componentDidMount() {
    this.FetchPosts();
    this.FetchPhotos();
    // console.log("Component Did Mount");
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" render={() => {
            return <Users postslist={this.state.posts} />
          }} />
          <Route path="/gallery" 
          render={() => {return <Gallery photoslist={this.state.photos} handleChange={this.hoverChange} />
          }} />
        </Switch>
      </div>
    )
  }
}