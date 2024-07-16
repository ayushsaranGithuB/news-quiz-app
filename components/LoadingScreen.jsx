// Universal loading screen component

const LoadingScreen = ({ text = 'loading...' }) => {
    return (
        <div className="centered card">
            <p className="loading-screen_text">{text}</p>
            <img src="loading.gif" alt="" />
        </div>
    );
};

export default LoadingScreen;    