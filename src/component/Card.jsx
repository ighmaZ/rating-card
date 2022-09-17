
import React, { useState } from 'react'
import FirstPage from './FirstPage'
import LastPage from './LastPage'
const Card = () => {

  const[isTrue, setIsTrue] = useState(false);
  
  return (
    <div className='card'>

{isTrue ? <FirstPage /> : <LastPage />}

    </div>
  )
}

export default Card