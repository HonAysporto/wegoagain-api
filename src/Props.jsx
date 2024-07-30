import React from 'react'
import MyButton from './MyButton'

const Props = () => {

    const test = (params) => {
        alert(params)
    }
  return (
    <>
    <MyButton title="Delete" myfunc={test}/>
    <MyButton title="Edit" myfunc={test}/>
    <MyButton title="Rusticate" myfunc={test}/>
    </>
  )
}

export default Props