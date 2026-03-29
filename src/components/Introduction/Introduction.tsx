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
                    <div className={styles.top_text}>
                        <h1 className={styles.my_name}>
                            <span className={styles.my_name_top}>Konstantin</span>
                            <span className={styles.my_name_bottom}>Zamyakin</span>
                        </h1>
                        <h2 className={styles.my_spec}>
                            <span>Frontend Developer</span>
                        </h2>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Introduction;