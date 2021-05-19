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
                    <p className={styles.description}>lsjdf aoifhaef af ifa oai faoihdfahf ahfaihfsfoaishdasf  fergh eth ehf f rh fg erg ergg erh edht wethb wethwetg ewthwet rweth weg et eth ewth eth ethehtw etwh ewth weth etw fge dg jyk tuk ryj rwjh rywjwryj rwyj tewghwt twehweth twwryj wryj wrth wrehthwrth rtw h aifh oaf a fa faih a faihfaidfhai g ga iahg gia dfoiah a ga hfa g aoidghoadhf a afg ag ago agigh ag ag oiagh g a gaihgdaiehfgqieagf a ga apdg ad gpigad. </p>
                    <p className={styles.description}>lsjdf aoifhaef af ifa oai faoihdfahf ahfaihfsfoaishdasf  fergh eth ehf f rh fg erg ergg erh edht wethb wethwetg ewthwet rweth weg et eth ewth eth ethehtw etwh ewth weth etw fge dg jyk tuk ryj rwjh rywjwryj rwyj tewghwt twehweth twwryj wryj wrth wrehthwrth rtw h aifh oaf a fa faih a faihfaidfhai g ga iahg gia dfoiah a ga hfa g aoidghoadhf a afg ag ago agigh ag ag oiagh g a gaihgdaiehfgqieagf a ga apdg ad gpigad. </p>
                </div>
            </div>
        </div>
    )
}