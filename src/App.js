import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import "./app.css";

const App = () => {
   return (
      <React.StrictMode>
         <Header />
         <Main />
      </React.StrictMode>
   );
};

export default App;
