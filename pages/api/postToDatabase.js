import { Account, Databases, ID } from "appwrite";
import { client } from "@/lib/initAppwrite";

const account = new Account(client);
const databases = new Databases(client);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { questions } = req.body;

    // Check for duplicate news_url fields in the questions array and skip them
    let seen = {};
    let filteredQuestions = questions.filter((item) => {
      let news_url = item.news_url;
      return seen.hasOwnProperty(news_url) ? false : (seen[news_url] = true);
    });

    try {
      for (let i = 0; i < filteredQuestions.length; i++) {
        // Convert the question.options array to a string
        let options = JSON.stringify(filteredQuestions[i].options);

        // Create a new question object with the options string
        filteredQuestions[i] = {
          ...filteredQuestions[i],
          options: options,
        };

        const endpoint = process.env.APPWRITE_ENDPOINT;

        // Create the document in the database
        const response = await fetch(
          `${endpoint}/databases/public/collections/questions/documents`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-Appwrite-Project": process.env.APPWRITE_PROJECT_ID,
              "X-Appwrite-Key": process.env.APPWRITE_API_KEY,
            },
            body: JSON.stringify({
              documentId: ID.unique(),
              data: filteredQuestions[i],
              permissions: ['read("any")'],
            }),
          }
        );

        const result = await response.json();
        console.log(result);
      }

      res.status(200).json({ message: "Questions inserted successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
