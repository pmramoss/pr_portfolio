import styles from "./Aboutme.module.scss";
import img from "../../assets/sob1.png";
import { GiAchievement } from "react-icons/gi"
import { IContent } from "../../types/content";

interface Props {
     content: IContent
}

export default function AboutMe({content}: Props){
     return (
          <div id="aboutme" className={styles.aboutme}>
               <div className={styles.aboutme__image}>
                    <img src={img} alt="" />
               </div>
               <div className={styles.aboutme__info}>
                    <h3>{content.Aboutme_Title}</h3>
                    <p className={styles.aboutme__info__text}>{content.Aboutme_text1}<strong>{content.Aboutme_text2}</strong>{content.Aboutme_text3}</p>
                    <div className={styles.aboutme__info__certifications}>
                         <a href="/certificate">{content.Aboutme_link} <GiAchievement /></a>
                    </div>
               </div>
          </div>
     )
}