import { createContext, useState, useCallback, useContext } from "react";

const StateContext = createContext();

const StateProvider = ({children}) => {

    const [data, setData] = useState({
        quote: "",
        author: "",
        id: ""
    });
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const getQuote = useCallback(async () => {
        try {
            setIsLoading(true);
            const res = await fetch('https://api.quotable.io/random');
            const {content: quote, author, _id: id} = (await res.json());
            setData({quote: quote, author: author, id: id});
            setError(null);
            setIsLoading(false);
        } catch (error) {
            setError(
                error.message);
            setData({quote: '', author: '', id: ""})
            setIsLoading(false);
        }
    }, [])
    const saveQuote = useCallback((quoteData) => {
        let savedQuotes = JSON.parse(localStorage.getItem('quotes')) || [];
        let alreadyExist;
        savedQuotes.forEach(({id}) => {
            if (id === quoteData.id) {
                alreadyExist = true;
                return;
            }
        })
        if (!alreadyExist) {
            const canSave = window.confirm("Are you sure to save this quote?");
            if (canSave) {
            savedQuotes.push(quoteData);
            let json = JSON.stringify(savedQuotes);
            localStorage.setItem('quotes', json);
            }
        } else {
            alert("This quote is already saved");
        }
    }, [])
    return (
        <StateContext.Provider value={{
            data, error, isLoading, getQuote, saveQuote
        }}>{children}</StateContext.Provider>
    )
}

export const useStateContext = () => {
    return useContext(StateContext);
}

export default StateProvider