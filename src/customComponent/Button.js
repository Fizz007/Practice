import React from 'react'

const Button = ({color="primary",onClick, text,children, disabled, show}) => {
  return (
    show && (<button className={`mainbtn ${color}`} disabled={disabled} onClick={onClick}>
      {children || text}
    </button>)
  )
}

export default Button
