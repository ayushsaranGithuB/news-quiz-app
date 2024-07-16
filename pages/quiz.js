import React, { useEffect, useState } from "react";
import Quiz from "@/components/Quiz";
import LoadingScreen from "@/components/LoadingScreen";

const Page = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/questions_v2")
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data.questions);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen text="Generating Questions..." />
      ) : (
        <Quiz questions={questions} />
      )}
    </>
  );
};

export default Page;
