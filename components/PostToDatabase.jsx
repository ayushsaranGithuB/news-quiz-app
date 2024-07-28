// import the Appwrite client
import { Account, Databases, ID } from "appwrite";
import { client } from "@/lib/initAppwrite";
import { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";


const PostToDatabase = ({ setStage, questions }) => {

    // isLoading & isError are used to handle loading and error states
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState(null);


    const PostToDatabase = async (questions) => {
        try {
            const response = await fetch('/api/postToDatabase', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ questions }),
            });

            if (!response.ok) {
                throw new Error('Failed to insert questions');
            }

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
            setIsError(true);
            setError(error);
        } finally {
            setIsLoading(false);
        }

    }

    useEffect(() => {
        PostToDatabase(questions);
    }, [questions]);


    // if loading
    if (isLoading) {
        return <LoadingScreen text="Inserting into Database..." />;
    }

    // if error
    if (isError) {
        return (
            <div>
                <h1>Error</h1>
                <p>{error.message}</p>
            </div>
        );
    }

    // if success
    return (
        <div>
            <h1>Questions inserted into Database</h1>
            <p><a href={`https://cloud.appwrite.io/console/project-${process.env.APPWRITE_PROJECT_ID}/databases/database-public/collection-questions`}>Verify?</a></p>
        </div>
    );


}

export default PostToDatabase;