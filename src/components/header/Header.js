import React from "react";
import Navbar from "./Navbar";

const Header = () => {
   return (
      <header>
         <Navbar />
         <p className="about">
            This is my simple personal project and at the same time I made this
            because of practicing some react js concepts. You can add some
            features or more, just clone it at its repo.
         </p>
      </header>
   );
};

export default Header;
