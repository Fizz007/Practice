import React from 'react'

const Prod = ({item}) => {
  return (
    <div>
      {
        <ul>
            <li>
              {`Name: ${item.name}  &  Username: ${item.username} & Address ${item.address.city}`} </li>
        </ul>
      }
    </div>
  )
}

export default Prod
