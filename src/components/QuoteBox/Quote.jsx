import React from 'react'

const Quote = ({quote, author}) => {
  return (
    <>
        <div className="quote">"{quote}"</div>
        <div className="author"> -- {author}</div>
    </>
  )
}

export default Quote