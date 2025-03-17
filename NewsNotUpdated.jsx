import React from 'react';
import { useParams } from 'react-router-dom';

function NewsNotUpdated() {
  const { id } = useParams();
  return (
    <div className="container mt-5">
      <h1>Full News Not Updated Yet</h1>
      <p>Will Update Soon...</p>
    </div>
  );
}

export default NewsNotUpdated;
