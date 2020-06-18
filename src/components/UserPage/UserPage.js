import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function (props) {
  let { userId } = useParams();
  return (
    <>
      <h3>{props.data[userId].email}</h3>
      <Link to='/users'>eee</Link>
    </>
  )
}
