import React from 'react'
import useStore from '../Store'


const LastPage = () => {

  const selectedNumber = useStore((state) => state.selectedNumber) // selected from zustand store

  

  return (
    <>

<button className='button-review'>You selected {selectedNumber} out of  5</button>
<h1>Thank you!</h1>
<p>We appreciate you taking the time to give a rating. if you ever need more support, dont hesitate to get in touch</p>


    </>
  )
}

export default LastPage