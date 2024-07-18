import React, { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';
import NewsSelector from './NewsSelector';

const FetchNewsArticles = ({ setStage, setArticlesToConvert }) => {

    const [newsArticles, setNewsArticles] = useState([]);
    const [selectedArticles, setSelectedArticles] = useState([]);


    // isLoading & isError are used to handle loading and error states
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState(null);


    const fetchNewsArticles = async () => {
        const response = await fetch('/api/feedRika');
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            setNewsArticles(data.result);
        } else {
            setIsError(true);
            setError(response.statusText);
        }
        setIsLoading(false);

    }

    useEffect(() => {
        fetchNewsArticles();
    }, []);

    if (isLoading) {
        return (
            <LoadingScreen />
        )
    }

    if (isError) {
        return (
            <div className='error'>
                <p>Error: {error}</p>
            </div>
        )
    }

    function handleClick() {
        setArticlesToConvert(selectedArticles);
        setStage(2);
    }

    return (
        <>
            <h2>Succes!</h2>
            <details>
                <summary>API Response:</summary>
                <textarea name="response" id="news-response" cols={80} rows={4} defaultValue={JSON.stringify(newsArticles, null, 2)}></textarea>
            </details>
            <NewsSelector articles={newsArticles} selectedArticles={selectedArticles} setSelectedArticles={setSelectedArticles} />
            <p>
                <button onClick={handleClick}>Convert to Questions</button>
            </p>
        </>
    )

}


export default FetchNewsArticles;