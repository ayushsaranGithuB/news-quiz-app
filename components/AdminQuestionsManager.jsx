import { useEffect, useState } from 'react';
import { supabase } from '@/lib/initSupabase';
const AdminQuestionsManager = () => {

    const [questions, setQuestions] = useState([]);

    const fetchQuestions = async () => {
        const { data: questions } = await supabase
            .from('questions')
            .select('*')
        setQuestions(questions);
    };

    useEffect(() => {
        fetchQuestions();
    }, []);


    return (
        <>
            <ul>
                {questions.map((question) => (
                    <li key={question.url}>
                        <p>
                            <strong>Question:</strong> {question.question}
                        </p>
                        <p>
                            {question.options.map((option, index) => {
                                // Assuming each option is an object with a single key-value pair,
                                // where the key is the option identifier (e.g., "a", "b", "c", "d")
                                // and the value is the option text.
                                const key = Object.keys(option)[0]; // Get the first key of the object
                                const value = option[key]; // Get the value associated with that key
                                return (
                                    <span key={`${index}-${key}`}
                                        // if the key is equal to the correct answer, then make the text green
                                        style={key === question.correctAnswer ? { color: 'green' } : { color: 'black' }}
                                    >
                                        [ {value} ]
                                    </span>
                                );
                            })}

                        </p>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default AdminQuestionsManager;