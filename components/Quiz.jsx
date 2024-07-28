import { useState, useEffect } from 'react';
import Results from './Results';

const Quiz = ({ questions }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [timeTaken, setTimeTaken] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [totalTimeTaken, setTotalTimeTaken] = useState(0);

    useEffect(() => {
        // Set the start time when the component mounts
        setStartTime(Date.now());
    }, []);

    useEffect(() => {
        if (startTime) { // Correction: Ensure timer starts only if startTime is set
            const timer = setInterval(() => {
                setTimeTaken(Date.now() - startTime);
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [startTime]);

    useEffect(() => {
        if (showScore) {
            setTotalTimeTaken(Date.now() - startTime);
        }
    }, [showScore]);



    const handleAnswerOptionClick = (answer) => {
        setUserAnswers([...userAnswers, answer]);
        if (answer === questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
            setSelectedAnswer(null);
        } else {
            setShowScore(true);
        }
    };

    const formatTime = (milliseconds) => {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <>
            {showScore ? (
                <Results score={score} questions={questions} formatTime={formatTime} totalTimeTaken={totalTimeTaken} userAnswers={userAnswers} />
            ) : (
                <>
                    <div className="quiz-status">
                        <div><span>Question {currentQuestion + 1}</span> of {questions.length}</div>
                        <div className='timer'><img src='/timer.svg' width={18} /> {formatTime(timeTaken)}</div>
                    </div>
                    <div className="card" data-v0-t="card">

                        <h3 className="question" key={
                            currentQuestion
                        }>
                            {questions[currentQuestion].question}
                        </h3>
                        <div className="options">


                            <div role="radiogroup" aria-required="false" dir="ltr" className="custom-grid" tabIndex="0">

                                {JSON.parse(questions[currentQuestion].options).map((option, index) => {
                                    // Assuming each option is an object with a single key-value pair,
                                    // where the key is the option identifier (e.g., "a", "b", "c", "d")
                                    // and the value is the option text.
                                    const key = Object.keys(option)[0]; // Get the first key of the object
                                    const value = option[key]; // Get the value associated with that key
                                    return (
                                        <label key={`${currentQuestion}-${key}`} className="answer">
                                            <p>{value}</p>
                                            <input
                                                type="radio"
                                                name="answer"
                                                value={key}
                                                checked={selectedAnswer === key}
                                                onChange={() => setSelectedAnswer(key)}
                                            />
                                        </label>
                                    );
                                })}

                            </div>
                            <div className="quiz-navigation">
                                <button
                                    onClick={() => handleAnswerOptionClick(selectedAnswer)} // Use selectedAnswer instead of key
                                    disabled={selectedAnswer === null}
                                >NEXT
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Quiz;



