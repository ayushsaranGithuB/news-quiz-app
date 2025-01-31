import { useUser } from '@auth0/nextjs-auth0/client';


function Avatar() {
    const { user, error, isLoading } = useUser();

    if (error) return <div>{error.message}</div>;

    if (user && !isLoading) {
        return (
            <img src={user.picture} alt={user.name} title='View Profile' />
        );
    }
    return <img src="/user.svg" alt="login" />;
}

function UserModal() {
    const { user, error, isLoading } = useUser();

    if (error) return <div>{error.message}</div>;

    if (user && !isLoading) {
        return (
            <div className="profilemodal">
                <div className="modal-content">
                    <span className="close" onClick={
                        () => {
                            document.querySelector('.profilemodal').style.display = 'none';
                        }
                    }>x</span>
                    <Avatar />
                    {/* <a href="/profile"> My Profile</a> */}
                    <a href="/api/auth/logout" className='button' title="Logout">Log Out</a>
                    {user.roleType.includes("Admin") ? <a href="/admin" title="Admin Panel">Admin Panel</a> : null}
                </div>
            </div>
        );
    }
    return (
        <div className="profilemodal">
            <div className="modal-content">
                <span className="close" onClick={
                    () => {
                        document.querySelector('.profilemodal').style.display = 'none';
                    }
                }>x</span>
                <Avatar />
                <a className='button' href="/api/auth/login" title="Sign Up or Login">Sign in</a>
            </div>
        </div>
    );

}

const Header = () => {
    return (
        <header>
            <h1>
                <a href="/" className="logo">
                    <img src="logo.svg" alt="" /> News Quiz
                </a>
            </h1>
            <a className="icon" href="/leaderboard" title="Leaderboard">
                <img src="/trophy.svg" alt="Leaderboard" />
            </a>
            <div className="avatar" onClick={
                () => {
                    document.querySelector('.profilemodal').style.display = 'flex';
                }
            }>
                <span>
                    <Avatar />
                </span>

            </div>
            <UserModal />
        </header>
    );
}

export default Header;