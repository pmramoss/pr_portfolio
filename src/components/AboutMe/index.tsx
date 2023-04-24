import styles from "./Aboutme.module.scss";
import img from "../../assets/sob1.png";
import { GiAchievement } from "react-icons/gi"
import { ImLinkedin, ImGithub } from "react-icons/im"
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
                         <a href="#certificates">{content.Aboutme_link} <GiAchievement /></a>
                    </div>
                    <div className={styles.links}>
                         <div>
                              <a href="https://github.com/pmramoss" target="_blank"><ImGithub/>GitHub</a>
                         </div>
                         <div>
                              <a href="https://linkedin.com/in/pedro-lucas-ramos-557189217" target="_blank"><ImLinkedin/>LinkedIn</a>
                         </div>
                    </div>
               </div>
          </div>
     )
}