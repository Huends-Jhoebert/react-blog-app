import React, { useState, useEffect } from "react";
import {
   MDBBtn,
   MDBContainer,
   MDBRow,
   MDBCol,
   MDBCard,
   MDBCardBody,
   MDBCardTitle,
   MDBCardText,
   MDBCardHeader,
   MDBCardFooter,
} from "mdb-react-ui-kit";

const BlogsSection = () => {
   const [posts, setPosts] = useState([]);

   const [clicked, setClicked] = useState(0);

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
      if (clicked == 1) {
         getPosts();
      }
   }, [clicked]);

   const remove = (id) => {
      const updatedPosts = posts.filter((post) => post.id !== id);
      setPosts(updatedPosts);
   };

   return (
      <section className="blogsSection">
         <h1>Blog</h1>
         <div className="text-center">
            <MDBBtn
               color="primary"
               onClick={() => setClicked((prev) => prev + 1)}
            >
               <i className="fas fa-boxes"></i> Fetch
            </MDBBtn>
         </div>
         <MDBRow className="d-flex justify-content-center mt-5">
            {posts.map((post) => {
               const randomNumber = Math.floor(Math.random() * 10) + 1;
               const { id, title, body } = post;
               return (
                  <MDBCol
                     key={id}
                     size="4"
                     // className="justify-content-center"
                     style={{ marginBottom: "2rem" }}
                  >
                     <MDBCard
                        alignment="center"
                        className="shadow-4"
                        style={{ maxWidth: "22rem" }}
                     >
                        <MDBCardHeader>POST</MDBCardHeader>
                        <MDBCardBody>
                           <MDBCardTitle>{title}</MDBCardTitle>
                           <MDBCardText>{body}</MDBCardText>
                           <div className="text-center">
                              <MDBBtn color="danger" onClick={() => remove(id)}>
                                 Delete
                              </MDBBtn>
                           </div>
                        </MDBCardBody>
                        <MDBCardFooter className="text-muted">
                           {randomNumber} days ago
                        </MDBCardFooter>
                     </MDBCard>
                  </MDBCol>
               );
            })}
         </MDBRow>
      </section>
   );
};

export default BlogsSection;
