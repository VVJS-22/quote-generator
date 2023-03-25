import React, { useEffect } from 'react'
import Quote from './QuoteBox/Quote';
import Error from './common/Error';
import { useStateContext } from '../providers/StateProvider';
import Loader from './common/Loader';

const QouteBox = React.memo(() => {
    const {data, error, isLoading, getQuote, saveQuote} = useStateContext();
    useEffect(() => {
      getQuote();
    }, [getQuote])
    
    return(
        <div className="wrapper">
            <div className="quote-wrapper">
            {isLoading ? 
                <Loader /> : 
            data.quote ?
                <Quote quote={data.quote} author={data.author} /> : 
                <Error error={error}/>
            }
            </div>
            <div className="btns">
                <button className="save" onClick={() => saveQuote(data)} disabled={isLoading}>Save</button>
                <button className="submit" onClick={getQuote} disabled={isLoading}>Next</button>
            </div>
        </div>
    )
})

export default QouteBox