import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Link to="/page2" className="App-link">
        Previous Page
      </Link>
    </div>
  );
};

export default HomePage;
