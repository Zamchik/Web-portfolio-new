import styles from './styles.module.scss';
import image from '../../assets/I_am.jpg';

const Introduction = () => {
    return (
        <section className={styles.page_top}>
            <div className={styles.custom_container}>
                <div className={styles.custom_wrapper}>
                    <div className={styles.row}>
                        <div>
                            <img src={image} alt="I_am" className={styles.i_am} />
                            <div className={styles.i_am_shadow}></div>
                        </div>

                        <span className={styles.greetContainer_name}>Константин</span>
                        <span className={styles.greetContainer_name}>Замякин</span>
                    </div>
                </div>
            </div>

            <div>
                <h2>Frontend Developer</h2>
            </div>
        </section>
    )
}

export default Introduction;