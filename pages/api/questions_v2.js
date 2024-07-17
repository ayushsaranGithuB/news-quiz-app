import { supabase } from "@/lib/initSupabase";

const fetchQuestions = async () => {
  const { data: questions } = await supabase.from("questions").select("*");
  return questions;
};

export default async function handler(req, res) {
  let questions = await fetchQuestions();

  // select 10 random questions
  questions.sort(() => Math.random() - 0.5);
  questions.splice(5);

  const jsonResponse = {
    questions,
  };

  // set a 5 second delay to simulate network latency
  setTimeout(() => {
    res.setHeader("Cache-Control", "s-maxage=40");
    res.status(200).json(jsonResponse);
  }, 2000);
}

// Opt out of caching for all data requests in the route segment
export const dynamic = "force-dynamic";
