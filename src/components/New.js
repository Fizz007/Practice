import React, { useContext, useEffect, useState } from "react";

import Prod from "./Prod";
import { userCont } from "../State/Context";
// import axios from 'axios';

const Data = () => {

  const [val, setVal] = useState(" ");
   const global = useContext(userCont)

  useEffect(() => {
    let timer = setTimeout(()=> {
      fetchData();

    },2000)
    return ()=> clearTimeout(timer)
  }, [val]);
  

  const url = "https://jsonplaceholder.typicode.com/users";


  const fetchData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => global.api(data));
  };

  function changeHandler(e){
    setVal(e.target.value)
    const filterData = global.data.filter((elem)=> {
     return  elem.name.toLowerCase().includes(val.toLowerCase()) || elem.username.toLowerCase().includes(val.toLowerCase())
    })

   global.updateapi(filterData)
  }
 

  return (
    <>
      <h3>Search</h3>
      <input
        type="text"
        autoComplete="On"
        value={val}
        placeholder="Search"
        onChange={changeHandler} 
      />
      {
          global.newdata.length > 0 ? 

          global.newdata.map((item,i)=> {
            return <Prod item={item} key={i}/> 
          }) :
           global.data.map((item,i)=> {
            return <Prod item={item} key={i}/> 
          })


      }
      
  
    </>
  );
};

export default Data;
