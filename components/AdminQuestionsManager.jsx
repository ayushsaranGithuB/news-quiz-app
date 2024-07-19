import { useEffect, useState } from 'react';
import Head from 'next/head';

import FetchNewsArticles from './FetchNewsArticles';
import ConvertToQuestions from './ConvertToQuestions';
import PostToSupabase from './PostToSupabase';

import styles from '@/styles/Admin.module.css';

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

    function StageManager({ stage }) {
        switch (stage) {
            case 0:
                return (
                    <div>
                        <h1>Generate New Questions</h1>
                        <button onClick={() => setStage(1)}>Fetch Articles</button>
                    </div>
                );
            case 1:
                return <FetchNewsArticles setStage={setStage} setArticlesToConvert={setArticlesToConvert} />;
            case 2:
                return <ConvertToQuestions setStage={setStage} articles={articlesToConvert} setQuestions={setQuestions} />;
            case 3:
                return <PostToSupabase setStage={setStage} questions={questions} />;
            default:
                return <p>Stage: {stage}</p>;
        }

        return (
            <p>
                Stage: {stage}
            </p>

        )
    }


    return (
        <>
            <Head>
                <title>Admin - NewsQuiz</title>
            </Head>
            {renderNavigation()}
            <StageManager stage={stage} />
        </>
    );


}

export default AdminQuestionsManager;