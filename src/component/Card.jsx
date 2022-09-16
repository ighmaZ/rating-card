
import React from 'react'
import {AiFillStar} from 'react-icons/ai'
const Card = () => {
  return (
    <div className='card'>

<div className='fill'><AiFillStar/></div>
<h2>How did we do?</h2>
<p>Please let us know how we did with your support request. all feedback is appreciated to help us improve our offering!</p>
<div className='button-container'>

<button className='button'>1</button>
<button className='button'>2</button>
<button className='button'>3</button>
<button className='button'>4</button>
<button className='button'>5</button>
</div>
<button className='submit'>SUBMIT</button>

    </div>
  )
}

export default Card