import React, { useContext, useRef, useState } from "react";
import { UserCont } from "./Userauth";


const Child = () => {
  const [data, setData] = useState("");
  const ip = useRef("")

  const auth = useContext(UserCont)
  // console.log(auth)

  function handle(){
 
    console.log(   ip.current.value)
  }

  function handlerr(){
    ip.current.focus()
    setData("")
  }
  return (
    <div>
        <input
        type="text"
        ref={ip}
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={handle}>Login</button>
      <button onClick={handlerr}>reset</button>
    </div>
  );
};

export default Child;
