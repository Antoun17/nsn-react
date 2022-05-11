import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

export default function NewsletterDetails() {
  const { id } = useParams()

  const [Alldata, setAlldata] = useState({}); // <-- object

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch('http://localhost:1337/api/newsletters' + id)
      .then((response) => response.json())
      .then((json) => setAlldata(json));
  }, []);

  console.log(Alldata);

  return (
    <div className="recension--div">
  <div className='rating'>{Alldata.attributes.postdate}</div>
  <h2>{Alldata.attributes.title}</h2>
 
  <p>{Alldata.attributes.body}</p>

  </div>
  )
}
