import styles from './Project.module.css';

export default function Projects() {
    return (
        <div>
            <h1 className={styles.title}>Projects</h1>
            <div className={styles.project_container}>
                <div className={styles.project_box}>
                    <a href="" target="_blank" className={styles.project_name}><img className={styles.crypto_img} src="https://imgur.com/mWZYC22.jpg"></img>
                    <h2>Crypto</h2></a>
                    <h4 className={styles.project_description}>Designed to give up-to-date crypto data and be able to save your favorite cryptos for easy access to see their price, market cap, and more. </h4>
                    <h4>software used/ icons</h4>
                </div>
                <div className={styles.project_box}>
                    <a href="https://drew-e-wilson.github.io/find-a-recipe/" target="_blank" className={styles.project_name}><img className={styles.recipe_img} src="https://imgur.com/CDAnD0X.jpg"></img>
                    <h2>Find-A-Recipe</h2></a>
                    <h4 className={styles.project_description}>Searching for your favorite recipes easily. Get ingredients and step by step instructions to make some of the best recipes you can think of.</h4>
                    <h4>software used/ icons</h4>
                </div>
                <div className={styles.project_box}>
                    <a href="https://bunmeevang.github.io/project-3-front/#/" target="_blank" className={styles.project_name}><img className={styles.codr_img} src="https://imgur.com/Y66lcHk.jpg"></img>
                    <h2 className={styles.project_name}>Codr</h2></a>
                    <h4 className={styles.project_description}>A platform designed for people to share ideas, articles and coding issues and anyone be able to comment and post their own content.</h4>
                    <h4>software used/ icons</h4>
                </div>
                <div className={styles.project_box}>
                    <a href="https://drew-e-wilson.github.io/Attack-of-the-Holidays/" target="_blank" className={styles.project_name}><img className={styles.attack_img} src="https://imgur.com/ViRXswN.jpg"></img>
                    <h2 className={styles.project_name}>Attack of the Holidays</h2></a>
                    <h4 className={styles.project_description}>A single player fighting game against 3 evil holiday villians. Each villain is set in a different location. Take down all 3 to save the world.</h4>
                    <h4>software used/ icons</h4>
                </div>
            </div>
        </div>
    )
}