import React from 'react';
import './blog.scss';
import Jumbotron from "react-bootstrap/Jumbotron";

const BlogPost = (props) => (
   <Jumbotron className='full-page'>
       {props.content}
   </Jumbotron>
);

export default BlogPost;