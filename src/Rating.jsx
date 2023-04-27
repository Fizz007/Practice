import React, { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";

function Rating({count}) {
    const [rating, setrating] = useState(0);
    // const [tog, setTog] = useState('red')
    const [hovver, setHover] = useState("");

    function handle(i) {
        setrating(i)
    }

    function getcolor(i) {
        if(hovver >= i){
            return 'red'
        }
       else if (!hovver && i <= rating) {
            return 'black'
        }
        else {
            return 'green'
        }
    }
  return (
    <div>
       {Array(count).fill(0).map((_, i) => <AiOutlineStar size={50} style={{ color: getcolor(i) }} className='star' key={i} onMouseEnter={()=> setHover(i)} onMouseLeave={()=> setHover("")} onClick={() => handle(i)} />)}
    </div>
  );
}

export default Rating;
