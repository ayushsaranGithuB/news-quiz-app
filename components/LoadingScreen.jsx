// Universal loading screen component
import styles from '@/styles/Loading.module.css';

const LoadingScreen = ({ text = 'loading...' }) => {
    return (
        <div className={"card " + styles.loading}>
            <img src="/newspaper.svg" alt="" width={50} className={styles.icon} />
            <p className={styles.text}>{text}</p>
            <img src="/loading.gif" alt="" />
        </div>
    );
};

export default LoadingScreen;    