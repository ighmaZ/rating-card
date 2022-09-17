import React from 'react'
import useStore from '../Store'

const Button = ({number}) => {

    const setNum = useStore((state) => state.setNum); // setNum will trigger

    return (
        <button
          onClick={() => setNum(number)}
          className="button"
        >
          {number}
        </button>
      )}
  


export default Button