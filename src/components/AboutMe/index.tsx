import styles from "./Aboutme.module.scss";
import img from "../../assets/sob1.png";
import { GiAchievement } from "react-icons/gi"

export default function AboutMe(){
     return (
          <div id="aboutme" className={styles.aboutme}>
               <div className={styles.aboutme__image}>
                    <img src={img} alt="" />
               </div>
               <div className={styles.aboutme__info}>
                    <h3>Sobre mim</h3>
                    <p className={styles.aboutme__info__text}>Encontrei meu amor na programação e desde então venho estudando e me dedicando ao máximo para desenvolver minhas habilidades. Hoje possuo conhecimentos centrados no Front-end, usando <strong> React, Vue e Typescript</strong>, além das bibliotecas de css:<strong> Sass e Styled Components</strong>. Tenho como ponto forte o trabalho em equipe pois possuo boas habilidades comunicativas tanto para apresentações em público como no dia a dia.</p>
                    <div className={styles.aboutme__info__certifications}>
                         <a href="/certificate">Certificações <GiAchievement /></a>
                    </div>
               </div>
          </div>
     )
}