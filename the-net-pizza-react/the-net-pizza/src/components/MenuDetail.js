import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MenuDetail() {
  const { id } = useParams();
  const [piatto, setPiatto] = useState({});

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/michelefenu/tnv-academy-VII/piatti/${id}`
    )
      .then((res) => res.json())
      .then((res) => setPiatto(res));
  });

  return (
    <div>
      <h2>{piatto.title} - {piatto.price} €</h2>
      <span>{piatto.description}</span>
      <img src={piatto.imageUrl} />
    </div>
  );
}
