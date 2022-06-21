import React from "react";
import { Link } from "react-router-dom";

/**
 * This should be a React component that, at the very least, comprises an image component a title and a description or subheading.
 * 
 * @param props 
 * @returns 
 * 
 */
const Card = (props) => {
  // eslint-disable-next-line react/prop-types
  const {name, image, id} = props;
  console.log(name)
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "15px", color: "#333", border: "solid 1px #333", borderRadius: "5px"}}>
      <div style={{width: "90%", height: "200px", backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center"}}></div>
      <h3>{name}</h3>  
      <Link to={`/c/${id}`}>
        <h5>View More</h5>  
      </Link> 
    </div>
  )
}

export default Card