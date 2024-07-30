import React from 'react'

const MyButton = ({title, myfunc}) => {
  return (
    <>
        <button onClick={()=>myfunc(1)}>{title}</button>
    </>
  )
}

export default MyButton 