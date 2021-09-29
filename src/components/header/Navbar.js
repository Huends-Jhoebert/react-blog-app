import React from "react";

const Navbar = () => {
   return (
      <nav>
         <p className="logo">HuenDs</p>
         <ul>
            <li>
               <a href="#">About</a>
            </li>
            <li>
               <a href="#">Blogs</a>
            </li>
            <li>
               <a
                  href="https://github.com/Huends-Jhoebert/react-blog-app"
                  target="_blank"
               >
                  Repo
               </a>
            </li>
         </ul>
      </nav>
   );
};

export default Navbar;
