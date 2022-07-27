import React from 'react';
import { useParams } from 'react-router-dom';

export default function MenuDetail() {
  const { id } = useParams();
  
  return <h2>Menu Detail {id}</h2>;
}
