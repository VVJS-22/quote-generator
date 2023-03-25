import React from 'react'
import { useParams } from 'react-router-dom'

const SingleQuote = () => {
    const {id} = useParams();
  return (
    <div>SingleQuote {id}</div>
  )
}

export default SingleQuote