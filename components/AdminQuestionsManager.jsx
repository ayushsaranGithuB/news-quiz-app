import { useEffect, useState } from 'react';
import FetchNewsArticles from './FetchNewsArticles';
import ConvertToQuestions from './ConvertToQuestions';

import styles from '@/styles/Admin.module.css';
import PostToSupabase from './PostToSupabase';

const AdminQuestionsManager = () => {

    const [articlesToConvert, setArticlesToConvert] = useState([]);
    const [questions, setQuestions] = useState([]);

    const [stage, setStage] = useState(0);


    function renderNavigation() {
        return (
            <nav className={styles.inline_navigation}>
                <ul>

                    <li>
                        {stage > 0 ? (
                            <a href="#" onClick={() => setStage(1)}><span className={styles.number}>1</span> Fetch News</a>
                        ) : (
                            <>
                                <span className={styles.number}>1</span> Fetch News
                            </>
                        )}
                    </li>
                    <li className={styles.arrow}>
                        {'→'}
                    </li>
                    <li>
                        {stage > 1 ? (
                            <a href="#" onClick={() => setStage(2)}><span className={styles.number}>2</span> Convert to Quiz Questions</a>
                        ) : (
                            <>
                                <span className={styles.number}>2</span> Convert to Quiz Questions
                            </>
                        )}
                    </li>
                    <li className={styles.arrow}>
                        {'→'}
                    </li>
                    <li>
                        {stage > 2 ? (
                            <a href="#" onClick={() => setStage(3)}><span className={styles.number}>3</span> Insert into Supabase</a>
                        ) : (
                            <>
                                <span className={styles.number}>3</span> Insert into Supabase
                            </>

                        )}
                    </li>
                </ul>
            </nav>
        );
    }

    function StageManager(stageObject) {

        // Convert stage object to a number
        const stageValue = stageObject.stage;

        if (stageValue === 0) {
            return (
                <div>
                    <h1>1. Fetch News from Feedrika</h1>
                    <button onClick={() => setStage(1)}>Start</button>
                </div>
            );
        }

        if (stageValue === 1) {
            return (
                <FetchNewsArticles setStage={setStage} setArticlesToConvert={setArticlesToConvert} />
            );
        }

        if (stageValue === 2) {
            return (
                <ConvertToQuestions setStage={setStage} articles={articlesToConvert} setQuestions={setQuestions} />
            );
        }

        if (stageValue === 3) {
            return (
                <PostToSupabase setStage={setStage} questions={questions} />
            );
        }

        return (
            <p>
                Stage: {stageValue}
            </p>

        )
    }


    return (
        <>
            {renderNavigation()}
            <StageManager stage={stage} />
        </>
    );


}

export default AdminQuestionsManager;