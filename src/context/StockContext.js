import React, { createContext, useState, useEffect, useCallback, } from 'react';

const ContextValue = {
    stockData: [],
    getStockDetail: () => {},
};

const StockContext = createContext(ContextValue);
export default StockContext;

export function StockContextProvider(props) {
    const [stockData, setData] = useState([]);

    useEffect(() => {
        fetch('http://54.180.87.156:5000/')
        .then(response => {
            if(!response.ok) {
                return;
            }
            return response.json()
            .then(responseJSON => {
                setData(responseJSON);
            });
        })
        .catch(error => {
            console.log('error: ', error);
        });
    }, [])

    return (
        <StockContext.Provider value={{ stockData }}>
            { props.children }
        </StockContext.Provider>
    )
}