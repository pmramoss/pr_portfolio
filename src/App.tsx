import Header from "./components/Header";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Certificate from "./components/Certificate";
import styles from "./styles/App.module.scss"
import {ReactComponent as Bra} from "./assets/svgs/brasil.svg"
import {ReactComponent as Usa} from "./assets/svgs/usa.svg"
import {useState, useEffect} from "react"
import translation from "./translations/translation.json"

export default function App(){
  const [state, setState] = useState(false);
  const [content, setContent]= useState(translation.portuguese);
  
  useEffect(() => {
    if(state==false){
      setContent(translation.portuguese);
    } else if (state ==true){
      setContent(translation.english)
    }
  })

  console.log(content)
  return (
    <div className={styles.page}>
      <button onClick={() => setState(!state)}>
        {state ? <Usa /> : <Bra />}
      </button>
      <Header content={content} />
      <Home content={content}/>
      <AboutMe content={content}/>
      <Projects content={content}/>
      <Certificate content={content} />
    </div>
  )
}

