import React from 'react';
import {Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div >
      <div >
        <h1 style={{paddingTop: "20%"}}>404</h1>
        <h2>Page not found</h2>
        <p>
          <Link to="/Home">Volver a Home</Link>
        </p>
      </div>
    </div>
  );
}
