import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function makeOpenAICall(articles_batch) {
  return await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `Given a json array from a news api, use it to generate multiple choice questions for a quiz. Return ONLY! JSON like this :
            '[
                {
                    "question": "What is the latest news on the conflict in Ukraine?",
                    "options": [
                        { "a": "Russia has withdrawn troops from the region" },
                        { "b": "Ukraine has declared a state of emergency" },
                        { "c": "The US has imposed sanctions on Russia" },
                        { "d": "The UN has called for a ceasefire" }
                    ],
                    "correctAnswer": "c",
                    "news_title": "GM to go all-electric by 2030",
                    "news_url": "https://www.cnn.com/",
                    "difficulty": "medium"
                },
            ]'
                
            JSON: 
            ${JSON.stringify(articles_batch)}
            `,
        maxtokens: 4000,
      },
    ],
  });
}

function isValidJSON(text) {
  try {
    JSON.parse(text);
    return true;
  } catch (error) {
    return false;
  }
}

async function handleRequest(req, res) {
  const { articles } = req.body;

  const questions = [];

  // Split articles into batches of 10
  //  For each batch make an OpenAI call
  //  Parse the response and store the questions in an array
  //  Return the array of questions
  try {
    for (let i = 0; i < articles.length; i += 3) {
      const articles_batch = articles.slice(i, i + 3);
      try {
        let response = await makeOpenAICall(articles_batch);
        let content = response.choices[0].message.content;

        if (!isValidJSON(content)) {
          console.log("Invalid JSON detected, trying to repair it.");
          console.log(content);
          response = await makeOpenAICall(articles_batch);
          content = response.choices[0].message.content;

          const cleanJSON = JSON.parse(content);
          questions.push(cleanJSON[0]);
        }
        const cleanJSON = JSON.parse(content);
        // console.log(cleanJSON);
        // for each object in the array, push it to the questions array
        cleanJSON.forEach((question) => {
          questions.push(question);
        });
      } catch (error) {
        console.error(error);
      }
    }
    res.status(200).json(questions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

export default handleRequest;
