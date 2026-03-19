import styles from './styles.module.scss';
import image from '../../assets/I_am.jpg';

const Introduction = () => {
    return (
        <section className={styles.page_top}>
            <div className={styles.custom_container}>
                <div className={styles.top_wrap}>
                    <picture className={styles.i_am}>
                        <img src={image} alt="I_am" className={styles.i_am_photo} />
                        <div className={styles.i_am_shadow}></div>
                    </picture>
                    <div className={styles.introduction_text}>
                        <div className={styles.introduction_text_top}>
                            <h1 className={styles.name}>
                                <span className={styles.name_first}>Konstantin</span>
                                <span className={styles.name_last}>Zamyakin</span>
                            </h1>
                        </div>
                        <h2>
                            <span>Frontend Developer</span>
                        </h2>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Introduction;