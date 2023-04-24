import styles from "../Projects.module.scss"
import { FiGithub, FiArrowUpRight } from "react-icons/fi";

interface Props {
     image: string,
     name: string,
     descript: string,
     tag1: string,
     tag2: string,
     github: string,
     link: string
}

export default function Container({image, name, descript, tag1, tag2, github, link}: Props){
     return(
     <div className={styles.projects__show}>
          <div className={styles.projects__show__image}>
               <img src={image} alt={name} />
          </div>
          <div className={styles.projects__show__info}>
               <div className={styles.projects__show__info__title}>
                    <h3>{name}</h3>
               </div>
               <div className={styles.projects__show__info__description}>
                    <p>{descript}</p>
               </div>
               <div className={styles.projects__show__info__tags}>
                    <ul>
                         <li>{tag1}</li>
                         <li>{tag2}</li>
                    </ul>
               </div>
               <div className={styles.projects__show__info__links}>
                    <div>
                         <a href={github} target="_blank">Code<FiGithub/></a>
                    </div>
                    <div>
                         <a href={link} target="_blank">View<FiArrowUpRight/></a>
                    </div>
               </div>
          </div>
     </div>
     )
}