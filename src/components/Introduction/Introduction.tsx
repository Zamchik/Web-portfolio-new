import styles from './styles.module.scss';

const Introduction = () => {
    return (
            <section className={styles.page_top}>
                <div className={styles.custom_wrapper}>
                    <h1 className={styles.greetContainer}>
                        <span className={styles.greetContainer_name}>Константин</span>
                        <span className={styles.greetContainer_name}>Замякин</span>
                    </h1>
                </div>
                <div>
                    <h2>Frontend Developer</h2>
                </div>
            </section>
    )
}

export default Introduction;