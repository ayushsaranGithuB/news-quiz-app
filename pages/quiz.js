import React, { useEffect, useState } from "react";
import Quiz from "@/components/Quiz";

const Page = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/questions")
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data.questions);
        setLoading(false);
      });
  }, []);

  return (
    <>{loading ? <div>Loading...</div> : <Quiz questions={questions} />}</>
  );
};

export default Page;
