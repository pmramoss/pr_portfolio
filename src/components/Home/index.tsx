import styles from "./Home.module.scss";
import ast from "../../assets/ast1.png";
import { BsDownload } from "react-icons/bs"

export default function Home( ){
     return(
          <div id="home" className={styles.home}>
               <div className={styles.home__image}>
                    <img src={ast} alt="" />
               </div>
               <div className={styles.home__info}>
                    <div className={styles.home__info__text}>
                         <h3>Olá, eu sou</h3>
                         <h1>Pedro Lucas Ramos</h1>
                         <h3>Desenvolvedor Front-end React</h3>
                    </div>
                    <div className={styles.home__info__link}>
                         <a href="">Download CV <BsDownload /></a>
                    </div>
               </div>
          </div>
     )
}