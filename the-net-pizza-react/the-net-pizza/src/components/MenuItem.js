import React from "react";
import { Link } from "react-router-dom";


export default function MenuItem({ piatto }) {
  return (
    <div className="col-12 col-sm-6 col-md-4 py-2">
      <div className="card shadow">
        <img
          src={piatto.imageUrl}
          className="card-img-top"
          alt="Tagliere salumi"
        />
        <div className="card-body">
          <h5 className="card-title"><Link to={`/menu/${piatto.id}`}>{piatto.title}</Link> - {piatto.price}€</h5>
          <p className="card-text">
            {piatto.description}
          </p>
        </div>
      </div>
    </div>
  );
}
