import Link from 'next/link';

const Results = (score, questions, formatTime, totalTimeTaken, userAnswers) => {
    return (
        <>
            <div className="results card">
                <div className='centered'>
                    <h1>
                        <small>You scored: </small> {score} <small> out of </small> {questions.length}
                    </h1>
                    <h2>
                        {/* switch statement to rank performance based on score between 0 and 5 */}
                        {score <= 1 ?
                            'You better start reading the news.'
                            : score <= 2 ? 'Ok, your\'e somewhat informed.'
                                : score <= 3 ? 'Not Bad! Keep reading the news.'
                                    : score <= 4 ? 'Great job! You\'re well informed. '
                                        : 'Excellent job! You\'re a news junkie!'}
                    </h2>
                    <h3>Time taken: {formatTime(totalTimeTaken)}</h3>
                </div>
                {/* Correct Answers */}
                <div className='scoring'>
                    <ul>
                        {questions.map((question, index) => (
                            <li key={index}>
                                <h4>
                                    {index + 1}: {question.question}
                                </h4>
                                {userAnswers[index] === question.correctAnswer ? (
                                    <>
                                        <div className='correct'>
                                            <strong> {'✓'}</strong> {question.options.find(option => option[userAnswers[index]])[userAnswers[index]]}
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className='wrong'>
                                            <strong>{'✖'}</strong> {userAnswers[index] ? question.options.find(option => option[userAnswers[index]])[userAnswers[index]] : 'No answer'}<br />
                                        </div>
                                        <div className='correct'>
                                            <strong>{'✓'}</strong> {question.options.find(option => option[question.correctAnswer])[question.correctAnswer]}
                                        </div>
                                        {/* Source */}

                                        <div className='source'>
                                            <p>
                                                Learn More:
                                            </p>
                                            <p>
                                                <a href={question.news_url} target="_blank" rel="noreferrer">{question.news_title}</a>
                                            </p>

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