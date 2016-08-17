import React from 'react';
import {Link} from 'react-router';

const HomePage = () => {
  return (
    <div>
      <h1>React Slingshot</h1>
      <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
    </div>
  );
};

export default HomePage;