import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import useStore from '../Store'


const FirstPage = () => {


  const getReview = useStore((state) => state.getReview); // getReview will trigger when button will be clicked
  const setNum = useStore((state) => state.setNum); // setNum will trigger

  const Button = ({ number }) => {   // button
    return (
      <button
        onClick={() => setNum(number)}
        className="button"
      >
        {number}
      </button>
    )}


  return (
    <>
<div className='fill'><AiFillStar/></div>
<h2>How did we do?</h2>
<p>Please let us know how we did with your support request. all feedback is appreciated to help us improve our offering!</p>
<div className='button-container'>



<Button number={1} />
<Button number={2} />
<Button number={3} />
<Button number={4} />
<Button number={5} />


</div>
<button onClick={getReview}className='submit'>SUBMIT</button>

    </>
  )
}

export default FirstPage