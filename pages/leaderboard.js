import { useEffect, useState } from "react";
import styles from "../styles/Leaderboard.module.css";
import { client } from "@/lib/initAppwrite";
import { Databases, Query } from "appwrite";

const LeaderBoard = () => {
  const [topScores, SetTopScores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getScores() {
    // get the 20 top users, by adding up the sum of the scores for each user

    const databases = new Databases(client);

    let data = [];

    try {
      const response = await databases.listDocuments("public", "scores", []);
      data = response.documents;

      //  group all the scores in data by user_id
      const groupedData = data.reduce((acc, obj) => {
        const key = obj.user_id;
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
      }, {});

      //  sum up the scores for each user
      const summedData = Object.keys(groupedData).map((key) => {
        return groupedData[key].reduce((acc, obj) => {
          return acc + obj.score;
        }, 0);
      });

      //  create a new array of objects with the summed scores
      data = Object.keys(groupedData).map((key, index) => {
        return {
          nickname: groupedData[key][0].nickname,
          score: summedData[index],
        };
      });

      //  sort the data by score
      data.sort((a, b) => b.score - a.score);
    } catch (error) {
      setError(error);
    }

    console.log(data);

    SetTopScores(data);
    setLoading(false);
  }

  useEffect(() => {
    getScores();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  const scoreRow = (user, index) => (
    <tr key={index}>
      <td className="rank">{index + 1}</td>
      <td className="name">{user.nickname}</td>
      <td className="score">{user.score}</td>
    </tr>
  );

  return (
    <>
      <div className="card">
        <h1 className="centered">LeaderBoard</h1>

        <table className={styles.leaderboard}>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th className="score">Score</th>
            </tr>
          </thead>
          <tbody>{topScores.map((user, index) => scoreRow(user, index))}</tbody>
        </table>

        <div className="centered">
          <h4>Sign-In to start posting your scores to the LeaderBoard</h4>
          <a href="/api/auth/login" className="button">
            Sign In
          </a>
        </div>
      </div>
    </>
  );
};

export default LeaderBoard;
