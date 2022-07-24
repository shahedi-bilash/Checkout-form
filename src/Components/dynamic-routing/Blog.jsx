import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { blogData } from './BlogsData';


const Blog = () => {

  const [blogs, setblogs] = useState(blogData);
  return (
    <div className='container'>
      <h1 className='text-center'>Blog Page</h1>
      <section>
        {blogs.map((blogs) => {

          const {id, title, body} = blogs

          const trankateString = (str, num) => {
            if (str.length > num) {
              return str.slice(0, num) + '...'
            }else{
              return str
            }
          } 
          
         return (
            <article className='bg-light mb-3 p-3' key={id}>
              <h3> {title} </h3>
              <p> {trankateString(body, 100)} </p>
              <Link to={title} state={{id, title, body}}>Learn more</Link>
            </article>
          )
        })}
      </section>
    </div>
  );
}

export default Blog;
