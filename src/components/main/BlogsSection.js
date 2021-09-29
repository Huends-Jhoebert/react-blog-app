import React, { useState, useEffect } from "react";

const BlogsSection = () => {
   const [posts, setPosts] = useState([]);

   const getPosts = async () => {
      try {
         const fetchData = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
         );
         const fetchDataJson = await fetchData.json();
         setPosts(fetchDataJson);
      } catch (err) {
         prompt(err);
      }
   };

   useEffect(() => {
      getPosts();
   }, []);

   console.log(posts);

   return (
      <section className="blogsSection">
         <h1>Blog</h1>
         <div class="game-board">
            {posts.map((post) => {
               const { id, title, body } = post;
               return (
                  <div class="box" key={id}>
                     <p>{title}</p>
                     <p>{body}</p>
                  </div>
               );
            })}
         </div>
      </section>
   );
};

export default BlogsSection;
