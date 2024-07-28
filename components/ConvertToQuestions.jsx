// OpenAi powered tool to convert a JSON object of news articles into multiple choice quiz questions.
import React, { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';
import styles from '@/styles/Admin.module.css';


const ConvertToQuestions = ({ setStage, articles, setQuestions }) => {

    const [generatedquestions, setGeneratedquestions] = useState([]);

    // isLoading & isError are used to handle loading and error states
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState(null);


    const generateQuestions = async (articles) => {

        // convert articles into a simple JSON array like 
        //  [{
        //   "title": "Exploring Bitcoin L2s Possibilities Beyond Lightning",
        //   "url": "https://bitcoinmagazine.com"
        //  },]

        articles = articles.map(article => {
            return {
                title: article.title,
                url: article.link
            }
        });


        const response = await fetch('/api/openAI', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ articles })
        });

        if (!response.ok) {
            setIsLoading(false);
            setIsError(true);
            setError(response.statusText);
            return;
        }

        const data = await response.json();
        console.log(data);
        setGeneratedquestions(data);
        setIsLoading(false);
    }

    useEffect(() => {
        generateQuestions(articles);
    }, [articles]);

    if (isLoading) {
        return <LoadingScreen />;
    }

    if (isError) {
        return (
            <div>
                <h1>Error</h1>
                <p>{error}</p>
            </div>
        );
    }

    const handleSubmit = async () => {
        setQuestions(generatedquestions);
        setStage(3);
    }

    return (
        <div className={styles.generatedQuestions}>
            <h2>{generatedquestions.length} Questions Generated</h2>

            <ul>
                {generatedquestions.map((question, index) => (
                    <li key={index}>
                        <details>
                            <summary>
                                {question.question}
                            </summary>

                            <ul>
                                {question.options.map((option, index) => (
                                    <li key={index}>{option[Object.keys(option)[0]]}</li>
                                ))}
                            </ul>
                            <p>Correct Answer: {question.correctAnswer}</p>
                            <p>News Title: {question.news_title}</p>
                            <p>News URL: <a href={question.news_url}>{question.news_url}</a></p>
                            <p>Difficulty: {question.difficulty}</p>
                        </details>
                    </li>
                ))}
            </ul>


            <button onClick={handleSubmit}>Insert into Database</button>

        </div>
    );
}

export default ConvertToQuestions;