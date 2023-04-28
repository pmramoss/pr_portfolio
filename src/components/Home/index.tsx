import styles from "./Home.module.scss";
import ast from "../../assets/ast1.png";
import { BsDownload } from "react-icons/bs"
import { SiStyledcomponents } from "react-icons/si"
import {ReactComponent as ReactLogo} from "../../assets/svgs/react.svg"
import {ReactComponent as VueLogo} from "../../assets/svgs/vue.svg"
import {ReactComponent as TypeLogo} from "../../assets/svgs/typescript.svg"
import {ReactComponent as SassLogo} from "../../assets/svgs/sass.svg"
import {ReactComponent as AdobeLogo} from "../../assets/svgs/adobe.svg"
import { IContent } from "../../types/content";
import cv from "../../documents/cv.pdf"

interface Props {
     content: IContent
}

export default function Home({content}: Props){
     return(
          <div id="home" className={styles.home}>
               <div className={styles.home__image}>
                    <img className={styles.slide_top} src={ast} />
               </div>
               <div className={styles.home__info}>
                    <div className={styles.home__info__text}>
                         <h3>{content.Home_text1}</h3>
                         <h1>Pedro Lucas Ramos</h1>
                         <h3>{content.Home_text2}</h3>
                    </div>
                    <div className={styles.home__info__link}>
                         <a href={cv} target="_blank">Download CV <BsDownload /></a>
                    </div>
                    <div className={styles.home__info__tecs}>
                         <h3>Tecs:</h3>
                         <ul>
                              <li><ReactLogo/></li>
                              <li><VueLogo/></li>
                              <li><TypeLogo/></li>
                              <li><AdobeLogo/></li>
                              <li><SassLogo/></li>
                              <li><SiStyledcomponents/></li>
                         </ul>
                    </div>
               </div>
          </div>
     )
}