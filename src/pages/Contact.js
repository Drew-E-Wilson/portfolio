import styles from './Contact.module.css';
import {AiOutlineMail, AiOutlinePhone, AiOutlineHome} from "react-icons/ai";

export default function Contact() {
    return (
        <div>
            <h1 className={styles.contact_me}>Contact Me!</h1>
            <div className={styles.container}>
                <div className={styles.section1}>
                <img className={styles.headshoty} src="https://i.imgur.com/M4p5Uwb.jpg" alr="image of Drew smiling"></img>
                </div>
                <div className={styles.section2}>
                    <h1 className={styles.my_name}>DREW WILSON</h1>
                    <h2 className={styles.job_title}>Software Developer</h2>
                    <div className={styles.info_holder}>
                        <a href = "mailto: dwilsrock21@gmail.com"><h4 className={styles.sendemail}><AiOutlineMail/> Dwilsrock21@gmail.com</h4></a>
                        <h4><AiOutlineHome/> Atlanta, GA</h4>
                        <h4><AiOutlinePhone/> 630-696-7997</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}