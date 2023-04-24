import styles from "./Projects.module.scss"
import aluroni  from "../../assets/proj_pics/aluroni.png"
import chatgpt3  from "../../assets/proj_pics/chatgpt3.png"
import form from "../../assets/proj_pics/form.png"
import { FiGithub, FiArrowUpRight } from "react-icons/fi";

export default function Projects( ){
     const pages =[{
          name: "Aluroni",
          description: "Seguindo o contexto de um restaurante, é uma página feita para dar informações sobre os pratos. Utiliza de bibliotecas como React Router e React Icons.",
          tags: ["React", "Sass"],
          image: aluroni,
          code: "github",
          link: ""
     }, {
          name: "ChatGPT3",
          description: "Página informativa sobre ChatGPT3 usando template do Figma. Originalmente em css puro, adaptei para Sass para praticar meu conhecimento com a biblioteca. ",
          tags: ["React", "Sass"],
          image: chatgpt3,
          code: "github",
          link: ""
     }, {
          name: "Form",
          description: "Formulário com verificação. Após preenchê-lo totalmente e sem erros, será redirecionado a uma nova página, indicando sucesso no cadastro.",
          tags: ["React", "Styled Components"],
          image: form,
          code: "github",
          link: ""
     }
]
     return (
          <div id="projects" className={styles.projects}>
               <div className={styles.projects__title}>
                    <h2>Meus projetos</h2>
               </div>
               {pages.map((pages, index) => (
                    <div className={styles.projects__show} key={index}>
                         <div className={styles.projects__show__image}>
                              <img src={pages.image} alt={pages.name} />
                         </div>
                         <div className={styles.projects__show__info}>
                              <div className={styles.projects__show__info__title}>
                                   <h3>{pages.name}</h3>
                              </div>
                              <div className={styles.projects__show__info__description}>
                                   <p>{pages.description}</p>
                              </div>
                              <div className={styles.projects__show__info__tags}>
                                   <ul>
                                        <li>{pages.tags[0]}</li>
                                        <li>{pages.tags[1]}</li>
                                   </ul>
                              </div>
                              <div className={styles.projects__show__info__links}>
                                   <div>
                                        <a href="">Code<FiGithub/></a>
                                   </div>
                                   <div>
                                        <a href="">View<FiArrowUpRight/></a>
                                   </div>
                              </div>
                         </div>
                    </div>
               ))}
          </div>
     )
}