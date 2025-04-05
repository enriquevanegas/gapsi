import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export function useFetchProducts(props) {
    console.log(props)
    const { query, page, newSearch } = { ...props };
    const [products, setProducts] = useState([]);


    useEffect(() => {
        const keyword = query ? query : 'books';
        const URL = `https://axesso-walmart-data-service.p.rapidapi.com/wlm/walmart-search-by-keyword?keyword=${keyword}&page=${page}&sortBy=best_match`;
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-RapidAPI-Key': 'fce0e15738msh6a87c0c9db9505cp14b74fjsn54bc768f3bc7'
            }
        }

        fetch(URL, options)
            .then(res => res.json())
            .then(data => {
                const itemStacks = data.item.props.pageProps.initialData.searchResult.itemStacks;
                const items = itemStacks.length ? itemStacks[0].items : [];

                newSearch ?
                    setProducts([...items]) :
                    setProducts(prev => [...prev, ...items]);
            });
    }, [query, page, newSearch]);

    return products
}
