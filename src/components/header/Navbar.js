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
         </ul>
      </nav>
   );
};

export default Navbar;
