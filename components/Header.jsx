const Header = () => {
    return (
        <header>
            <h1>
                <a href="/" className="home">
                    News Quiz
                </a>
            </h1>
            <a className="icon" href="/leaderboard" title="Leaderboard">
                <img src="trophy.svg" alt="Leaderboard" />
            </a>
            <div className="avatar">
                <a href="/login" title="Sign Up or Login">
                    <span>
                        <img className="" alt="login" src="user.svg" />
                    </span>

                </a>
            </div>
        </header>
    );
}

export default Header;