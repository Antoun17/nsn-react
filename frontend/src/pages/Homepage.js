import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import useFetch from '../hooks/useFetch'

export default function Homepage() {
  const [Alldata, setAlldata] = useState({}); // <-- object

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch("http://localhost:1337/api/newsletters")
      .then((response) => response.json()) 
      .then((json) => setAlldata(json));
  }, []);

  console.log(Alldata);

  return (

<div className="homepage--content">
{Alldata.data?.map((data) => (
<div key={data.attributes.id} className="recension--div">
  <div className='rating'>{data.attributes.postdate}</div>
  <h2>{data.attributes.title}</h2>
 
  <p>{data.attributes.body}</p>
  <Link to={`/newsletters/${data.id}`}>Read more</Link>
</div>
))}
</div>

);
      
   


}


