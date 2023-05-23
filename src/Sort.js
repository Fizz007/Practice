import React, { useEffect, useState } from "react";

const SSort = () => {
  const [data, setData] = useState([]);

  const [val, setVal] = useState([]);

  const [count, setCount] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())

      .then((val) => {
        setData(val);

        setVal(val);
      })

      .catch((err) => console.log("error", err));
  };

  useEffect(() => {
    if (count === 1) {
      const sortData = [...val].sort((a, b) => a.name.localeCompare(b.name));

      setVal(sortData);
    } else if (count === 2) {
      const sortData = [...val].sort((a, b) => b.name.localeCompare(a.name));

      setVal(sortData);
    } else if (count === 3) {
      setVal(data);

      setCount(0);
    }
  }, [count, val, data]);

  function handle() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>{count}</h2>

      <button onClick={handle}>Sort the name</button>

      <ul>
        {val ? (
          val.map((item, i) => {
            return <li key={i}>{item.name}</li>;
          })
        ) : (
          <li>No data</li>
        )}
      </ul>
    </div>
  );
};

export default SSort;

// import React, { useState } from 'react';

// const MyComponent = () => {

// const [data, setData] = useState(['apple', 'banana', 'cherry', 'date', 'elderberry']);

// const handleSort = () => {

// const sortedData = [...data].sort();

// setData(sortedData);

// };

// return (

// <div>

// <button onClick={handleSort}>Sort Data</button>

// <ul>

// {data.map((item, index) => (

// <li key={index}>{item}</li>

// ))}

// </ul>

// </div>

// );

// };

// export default MyComponent;

// export default SSort
