// import the supabase client
import { supabase } from "@/lib/initSupabase";
import { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";


const PostToSupabase = ({ setStage, questions }) => {

    // isLoading & isError are used to handle loading and error states
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState(null);


    const postToSupabase = async (questions) => {

        // Check for duplicate news_url fields in the questions array and skip them 
        let seen = {};
        let filteredQuestions = questions.filter((item) => {
            let news_url = item.news_url;
            return seen.hasOwnProperty(news_url) ? false : (seen[news_url] = true);
        });


        // Post questions to Supabase
        const { data, error } = await supabase
            .from('questions')
            .insert(filteredQuestions);

        if (error) {
            console.log(error);
            return;
        }

        console.log(data);
        setIsLoading(false);

    }

    useEffect(() => {
        postToSupabase(questions);
    }, [questions]);


    // if loading
    if (isLoading) {
        return <LoadingScreen text="Inserting into Supabase..." />;
    }

    // if error
    if (isError) {
        return (
            <div>
                <h1>Error</h1>
                <p>{error}</p>
            </div>
        );
    }

    // if success
    return (
        <div>
            <h1>Questions inserted into Supabase</h1>
            <p><a href="https://supabase.com/dashboard/project/urvqkyztajiewlvexyjp/editor/29134">Verify?</a></p>
        </div>
    );


}

export default PostToSupabase;