import React, { useCallback, useEffect, useState } from 'react'

const QouteBox = React.memo(() => {
    const [data, setData] = useState({
        quote: "",
        author: ""
    })
    const [error, setError] = useState(null);
    const getQuote = useCallback(async () => {
        try {
            const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=life', {
                headers: {
                    'X-Api-Key': process.env.REACT_APP_API_KEY
                }
            })
            const {quote, author} = (await res.json())[0];
            setData({quote: quote, author: author});
        } catch (error) {
            setError(error.message);
        }
    }, [])
    useEffect(() => {
      getQuote();
    }, [getQuote])
    
    return(
        <div className="wrapper">
            <div className="quote-wrapper">
            {data.quote ?
                (
                    <>
                        <div className="quote">{data.quote}</div>
                        <div className="author">{data.author}</div>
                    </>
                ) : error ? <>{error}</> : <></>
            }
            </div>
            <div className="btns">
                <button className="save">Save</button>
                <button className="submit">Submit</button>
            </div>
        </div>
    )
})

export default QouteBox