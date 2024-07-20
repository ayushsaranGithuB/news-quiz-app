import { useEffect, useState } from "react";
import styles from "../styles/Leaderboard.module.css";
import { supabase } from "@/lib/initSupabase";

const LeaderBoard = () => {
  const [topScores, SetTopScores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getScores() {
    // get the 20 top users, by adding up the sum of the scores for each user

    const { data, error } = await supabase
      .from("user_scores_view")
      .select("*")
      .order("total_score", { ascending: false })
      .limit(20);

    if (error) {
      console.log(error);
      return false;
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
    <tr>
      <td className="rank">{index + 1}</td>
      <td className="name">{user.nickname}</td>
      <td className="score">{user.total_score}</td>
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
