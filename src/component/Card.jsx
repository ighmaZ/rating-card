
import React from 'react'
import FirstPage from './FirstPage'
import LastPage from './LastPage'
import useStore from '../Store'

const Card = () => {

  const isTrue = useStore((state) => state.isTrue) // selected from zustand store

  return (
    <div className='card'>

{isTrue ? <LastPage /> : <FirstPage />}

    </div>
  )
}

export default Card