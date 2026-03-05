import styles from './styles.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header_container}>
                <h3 className={styles.nickname}>Zamchik.dev</h3>
                <nav className={styles.menu}>
                    <ul className={styles.nav}>
                        <li className={styles.menu_link}>Главная</li>
                        <li className={styles.menu_link}>Об о мне</li>
                        <li className={styles.menu_link}>Проекты</li>
                        <li className={styles.menu_link}>Контакты</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;