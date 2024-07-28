import { Account, Databases, ID } from "appwrite";
import { client } from "@/lib/initAppwrite";

const databases = new Databases(client);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { user_id, nickname, score } = req.body;

    try {
      const endpoint = process.env.APPWRITE_ENDPOINT;

      // Create the document in the database
      const response = await fetch(
        `${endpoint}/databases/public/collections/scores/documents`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Appwrite-Project": process.env.APPWRITE_PROJECT_ID,
            "X-Appwrite-Key": process.env.APPWRITE_API_KEY,
          },
          body: JSON.stringify({
            documentId: ID.unique(),
            data: {
              user_id: user_id,
              nickname: nickname,
              score: score,
              created_at: new Date().toISOString(),
            },
          }),
        }
      );

      const result = await response.json();
      //   console.log(result);

      res.status(200).json({ message: "Score posted to leaderboard" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
