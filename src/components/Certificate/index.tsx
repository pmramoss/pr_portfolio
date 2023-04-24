import styles from "./Certificate.module.scss"
import { IContent } from "../../types/content";

interface Props {
     content: IContent
}

export default function Certificate({content}: Props){
     const courses =[{
          name: "React: Integrating your React project with APIs",
          path: "https://cursos.alura.com.br/certificate/72c58814-bf41-455a-b5d0-f76094152fce" 
     }, {
          name: "React: dealing with static files",
          path: "https://cursos.alura.com.br/certificate/d2b3d236-4bc7-4488-b220-61acda08210e" 
     }, {
          name: "React: writing with Typescript",
          path: "https://cursos.alura.com.br/certificate/16088120-7f0a-4036-babd-2c0cea60d592" 
     }, {
          name: "React: getting to know the React Router library",
          path: "https://cursos.alura.com.br/certificate/f5672bed-b028-422a-bc55-d8669bb77855" 
     }, {
          name: "React: abstracting your CSS with Styled Components",
          path: "https://cursos.alura.com.br/certificate/be7b0a8c-9875-4f21-bfb2-5f1d96e97aee" 
     }, {
          name: "SASS: Syntactically Spectacular CSS",
          path: "https://cursos.alura.com.br/certificate/b5a8e6bf-c28f-4612-b4a7-13c6d1fbdf46" 
     }, {
          name: "Vue JS 2 - Vue Router & Vuex",
          path: "https://udemy-certificate.s3.amazonaws.com/image/UC-0148db9a-3ad3-4beb-9f00-b98d51411eab.jpg"
     }
]
     return (
          <div id="certificates" className={styles.certificates}>
               <div className={styles.certificates__title}>
                    <h1>{content.Certificate_title}</h1>
               </div>
               <div className={styles.certificates__courses}>
                    <ul>
                         {courses.map((courses, index) => (
                              <li key={index}>
                                   <a href={courses.path} target="_blank">{courses.name}</a>
                              </li>
                         ))}
                    </ul>
               </div>
          </div>
     )
}