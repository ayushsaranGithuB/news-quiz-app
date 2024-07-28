import { client } from "@/lib/initAppwrite";
import { Databases, Query } from "appwrite";

const fetchQuestions = async () => {
  const databases = new Databases(client);

  try {
    const response = await databases.listDocuments("public", "questions", []);
    return response.documents;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default async function handler(req, res) {
  let questions = await fetchQuestions();

  // console.log(questions);

  if (Array.isArray(questions)) {
    // select 10 random questions
    questions.sort(() => Math.random() - 0.5);
    questions.splice(5);
  } else {
    questions = [];
  }

  const jsonResponse = {
    questions,
  };

  res.setHeader("Cache-Control", "s-maxage=40");
  res.status(200).json(jsonResponse);
}

// Opt out of caching for all data requests in the route segment
export const dynamic = "force-dynamic";
