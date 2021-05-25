import styles from './About.module.css';

export default function About() {
    return (
        <div>
            <h1 className={styles.title_name}>About Drew</h1>
            <div className={styles.about_page}>
                <div className={styles.leftinfosheet}>
                    <img className={styles.headshot} src="https://i.imgur.com/M4p5Uwb.jpg" alr="image of Drew smiling"></img>
                    <h2>Software Developer</h2>
                    <h3>Drew Wilson</h3>
                    <p className={styles.description}>Aspiring Software Engineer with a background in International Business. I use enjoy using the MERN stack to build applications that solve clients’ needs and make their lives easier. I bring my passion for analysis and organizational knowledge to software development and use my skills and creativity to make each project unique. I love creating work that will be used by others and feel a responsibility to create the best product I can for the best experience. </p>
                </div>
            </div>
        </div>
    )
}