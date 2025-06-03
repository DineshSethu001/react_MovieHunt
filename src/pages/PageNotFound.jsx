import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../assets/notFound.jpg';

const PageNotFound = () => {
  return (
    <div className="container text-center mt-5">
      <img src={notFound} alt="Page Not Found" className="img-fluid" />
      <h3 className="text-danger mt-3">Oops! Page Not Found</h3>
      <p className="text-center">
        <Link to="/" className="btn btn-danger">Go to Home Page</Link>
      </p>
    </div>
  );
};

export default PageNotFound; // ✅ default export
