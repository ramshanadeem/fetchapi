import React, { useEffect, useState } from 'react'

function Fetchapi() {
    const [data, setdata]= useState([]);

useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(json => {
     //   console.log(json)
        setdata(json)

 },[])
    });


  return (
    <div className="App">
   <button  > fetching</button>
   <br/>
   <div>
       <ul>
          {data.map(
             ( item)=><li key={item.id}>{item.userId}{item.title}</li>
          )}
          
       </ul>
   </div>
  
 
    </div>
  );
}

export default Fetchapi;
