import React from "react";

 
 function SuperHero(props) {
     let {name, catchphrase, imgUrl} = props;
     return (
         <div className = "box">
             <p>{name}</p>
             <p>{catchphrase}</p>
             <img src={imgUrl} alt=""/>
         </div>
     );
 }
 
 export default SuperHero; 