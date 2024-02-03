//Style
import styles from "./Header.module.css";

const Header = () => {
    return (
        <div className={styles.container}>
            <h1>Contact App</h1>
            <p>
                <a href='https://github.com/abed-a-78'>First resome</a> | React.js Course
            </p>
        </div>
    );
};

export default Header;