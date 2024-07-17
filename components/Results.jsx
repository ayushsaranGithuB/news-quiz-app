import Link from 'next/link';

const Results = (score, questions, formatTime, totalTimeTaken, userAnswers) => {
    return (
        <>
            <div className="results card">
                <div className='centered'>
                    <h1>
                        You scored: <br /> {score} out of {questions.length}
                    </h1>
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
                                                <a href={question.source.url} target="_blank" rel="noreferrer">{question.source.title}</a>
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
                        <button >Restart Quiz
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Results;