import { useState } from "react";

import blogsData from '../data/blogData2_47'

const BlogsLocalJsonPage_47 =() => {
const [name, setName] = useState('Cindy Chen');
const [id, setId] = useState('207410647');

const [data, setData] = useState(blogsData);
console.log('blog data', data);
    return(
    <>
    <section className="blogs">
      <div className="section-title">
        <h2>Fetch Blogs From Local Json -- {name} {id}</h2>
      </div>
      <div className="blogs-center2">
        {data.map((item) => {
          const { id, img, remote_img, category, title, desc } = item;
          return(
            <article key={id} className="blog">
            <img
              src={img}
              alt={title}
              className="img blog-img"
            />
            <div className="blog-content">
              <span>{category}<i className="fa-solid fa-mug-saucer"></i></span>
              <h3>{title}</h3>
              <p>{desc}</p>
              <a href="#">read more</a>
            </div>
          </article>
          )
        })}
      </div>
    </section>
        </>
    )

}

export default BlogsLocalJsonPage_47;