const LeaderBoard = () => {
  return (
    <>
      <h1 className="centered">LeaderBoard</h1>

      <table className="leaderboard">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th className="score">Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="rank">1</td>
            <td className="name">John Doe</td>
            <td className="score">100</td>
          </tr>
          <tr>
            <td className="rank">2</td>
            <td className="name">Jane Doe</td>
            <td className="score">90</td>
          </tr>
          <tr>
            <td className="rank">3</td>
            <td className="name">John Smith</td>
            <td className="score">80</td>
          </tr>
          <tr>
            <td className="rank">4</td>
            <td className="name">Jane Smith</td>
            <td className="score">70</td>
          </tr>
          <tr>
            <td className="rank">5</td>
            <td className="name">John Johnson</td>
            <td className="score">60</td>
          </tr>
        </tbody>
      </table>

      <div className="centered">
        <h3>Sign-Up to see your score on the LeaderBoard</h3>

        <button>Sign-Up</button>
      </div>
    </>
  );
};

export default LeaderBoard;
