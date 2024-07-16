const Header = () => {
    return (
        <header>
            <h1>News Quiz</h1>
            <a className="icon" href="/leaderboard" title="Leaderboard">
                <img src="trophy.svg" alt="Leaderboard" />
            </a>
            <div className="avatar">
                <span>
                    <img className="" alt="@shadcn" src="placeholder-user.jpg" />
                </span>
            </div>
        </header>
    );
}

export default Header;