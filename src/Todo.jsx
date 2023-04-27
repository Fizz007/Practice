import React, { useState } from "react";
import { AiOutlinePlusCircle, AiFillEdit, AiFillDelete } from "react-icons/ai";

const Todo = () => {
  const [input, setInput] = useState("");
  const [item, setItem] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [edit, setEdit] = useState(null);

  function listofitems() {
    if (input === "") {
    }else if(input && !toggle){
      setItem(item.map((elem,i)=> {
        if(elem.id === edit){
          return {...elem, name:input}
        }

        return elem;
      }))

      setEdit(null)
      setInput("")
      setToggle(true)
    }
    
    else {
      let allinputdata = {
        id: Math.floor(Math.random() * 100 + 1).toString(),
        name: input,
      };
      setItem([...item, allinputdata]);
      setInput("");
    }
  }

  function deleAnitem(index) {
    let filter = item.filter((e) => e.id !== index);

    setItem(filter);
  }

  function editItem(index) {
   
    const newEditItem = item.find((e) => {
      return e.id === index;
    });
   console.log(newEditItem)
    setInput(newEditItem.name);
    setToggle(false);
    setEdit(index)
  }

  function removve() {
    setItem([]);
  }
  return (
    <div>
      <div className="container">
        <div className="maincontainer">
          <h2>Todo list</h2>

          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add an items"
            value={input}
          />

          {toggle ? (
            <AiOutlinePlusCircle size={20} onClick={listofitems} />
          ) : (
            <AiFillEdit size={20} onClick={listofitems}/>
          )}

          <ul>
            {item.map((value, i) => {
              return (
                <div key={i}>
                  <li>
                    {value.name}
                    <AiFillDelete onClick={() => deleAnitem(value.id)} />
                    <AiFillEdit onClick={() => editItem(value.id)} />
                  </li>
                </div>
              );
            })}
          </ul>

          <div className="remove">
            <button onClick={removve}>Remove all</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
