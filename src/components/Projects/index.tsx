import styles from "./Projects.module.scss"
import aluroni  from "../../assets/proj_pics/aluroni.png"
import chatgpt3  from "../../assets/proj_pics/chatgpt3.png"
import form from "../../assets/proj_pics/form.png"
import { IContent } from "../../types/content";
import Container from "./Container";

interface Props {
     content: IContent
}

export default function Projects({content}: Props){
     return (
          <div id="projects" className={styles.projects}>
               <div className={styles.projects__title}>
                    <h2>{content.Projects_title}</h2>
               </div>
               <Container image={aluroni} name="Aluroni" descript={content.Projects_descript1} tag1="React" tag2="Sass" github="https://github.com/pmramoss" link="https://www.google.com/"/>
               <Container image={chatgpt3} name="ChatGPT3" descript={content.Projects_descript2} tag1="React" tag2="Sass" github="https://github.com/pmramoss" link="https://www.google.com/"/>
               <Container image={form} name="Form" descript={content.Projects_descript3} tag1="React" tag2="Styled Components" github="https://github.com/pmramoss" link="https://www.google.com/"/>
          </div>
     )
}