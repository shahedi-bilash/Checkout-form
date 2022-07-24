import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const Blogs = () => {
  
  const {title} = useParams();
  const location = useLocation();                  
  console.log(location);
 
  return (
    <div>
      <h1 className='text-center'>{title} Page</h1>
      <p>{location.state.body}</p>
    </div>
  );
}

export default Blogs;
