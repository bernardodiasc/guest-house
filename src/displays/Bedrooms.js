import React from "react";
import { Link } from "react-router-dom";

const Bedrooms = ({ bedrooms }) => (
  <section>
    <h1>List of Bedrooms</h1>

    {bedrooms &&
      bedrooms.map(bedroom => (
        <p key={bedroom.id}>
          <Link to={`/bedroom/${bedroom.id}`}>{bedroom.name}</Link>
        </p>
      ))}
  </section>
);

export default Bedrooms;
