import Link from 'next/link';
import styles from '../styles/Results.module.css';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useEffect } from 'react';
import { client } from "@/lib/initAppwrite";
import { Databases, ID } from "appwrite";


const Results = ({ score, questions, formatTime, totalTimeTaken, userAnswers }) => {

    const { user, error, isLoading } = useUser();

    // Function to post the scores to Appwrite, if the user is logged in
    function postScore({ score }) {

        // Check if the user is logged in 
        if (user && !isLoading) {
            // We have a user

            // console.log(user);

            const postToAppwrite = async (user, score) => {
                // Post questions to Appwrite

                try {
                    const response = await fetch('/api/postScore', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ 'user_id': user.email, nickname: user.nickname, score }),

                    });

                    const data = await response.json();
                    // console.log(data);

                } catch (error) {
                    console.error('An unexpected error happened:', error);
                }

                return true;
            }

            postToAppwrite(user, score);

        }

        // user not logged in
        return false;
    }


    useEffect(() => {
        postScore({ score });
    }, [score]);


    return (
        <>
            <div className={styles.results + " card"}>
                <div className='centered'>
                    <h1>
                        {score <= 1 ?
                            'Oops!'
                            : score <= 2 ? 'Not Bad!'
                                : score <= 3 ? 'Alright!'
                                    : score <= 4 ? 'Great job!'
                                        : 'Nice Work!'}
                        <br />
                        You scored {score} out of {questions.length}
                    </h1>
                    <div className={styles.stars}>
                        {
                            // Display 5 stars, if i=score, add class 'active' to star, if i>score, add class 'inactive' to star
                            Array.from({ length: 5 }, (_, i) => (
                                <img src="/star.svg" alt="" key={i} className={i < score ? (
                                    i + 1 == score ? 'target' : 'active'
                                ) : 'inactive'} />
                            ))

                        }
                    </div>
                    <h2>
                        {/* switch statement to rank performance based on score between 0 and 5 */}
                        {score <= 1 ?
                            'Better start reading the news.'
                            : score <= 2 ? 'You\'re somewhat informed.'
                                : score <= 3 ? 'Keep reading the news.'
                                    : score <= 4 ? 'You\'re well informed. '
                                        : 'You\'re a news junkie!'}
                    </h2>
                    <h3>Time taken <img src='/timer-dark-svg.png' width={16} height={16} /> {formatTime(totalTimeTaken)}</h3>
                </div>
                {/* Correct Answers */}
                <div className={styles.scoring}>
                    <ul>
                        {questions.map((question, index) => (
                            <li key={index}>
                                <h4 className="answer">
                                    {index + 1}: {question.question}
                                </h4>
                                {userAnswers[index] === question.correctAnswer ? (
                                    <>
                                        <div className={styles.correct}>
                                            <strong> {'✓'}</strong> {JSON.parse(question.options).find(option => option[userAnswers[index]])[userAnswers[index]]}
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className={styles.wrong}>
                                            <strong>{'✖'}</strong> {userAnswers[index] ? JSON.parse(question.options).find(option => option[userAnswers[index]])[userAnswers[index]] : 'No answer'}<br />
                                        </div>
                                        <div className={styles.correct}>
                                            <strong>{'✓'}</strong> {JSON.parse(question.options).find(option => option[question.correctAnswer])[question.correctAnswer]}
                                        </div>
                                        {/* Source */}

                                        <div className={styles.source}>
                                            <p>
                                                Learn More:
                                            </p>
                                            <a href={question.news_url} target="_blank" rel="noreferrer">{question.news_title}</a>


                                        </div>
                                    </>
                                )
                                }
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Restart Quiz Button */}
                <div className="quiz-navigation">
                    <Link href='/'>
                        <button >Try Another</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Results;