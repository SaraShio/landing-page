import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer(){
    return (
        <>
            <footer className={styles.footer}>
                <p>&copy; {new Date().getFullYear()} Sara</p>
                <a href="https://github.com/Haydenleung/MDIA-3109-Final-Project.git" target="_blank" rel="noopener noreferrer">Github Repo</a>
            </footer>
        </>
    )
}
