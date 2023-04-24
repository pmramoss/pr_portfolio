import styles from "./Header.module.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";
import { IContent } from "../../types/content";

interface Props {
     content: IContent
}

export default function Header({content}: Props){
     const [menuOpen, setMenuOpen] = useState(false);
     const menuToggler = ( ) => setMenuOpen((p) => !(p))
     return(
          <div className={styles.header}>
               <div className={styles.header__content}>
                    <div>
                         <a href="#home" className={styles.logo}>Portfolio</a>
                    </div>
                    <div>
                         <nav className={`${styles.nav} ${menuOpen ? styles[`nav--open`] : {}}`}>
                              <a href="#home" className={styles.nav__item}>{content.Nav1}</a>
                              <a href="#aboutme" className={styles.nav__item}>{content.Nav2}</a>
                              <a href="#projects" className={styles.nav__item}>{content.Nav3}</a>
                              <a href="#certificates" className={styles.nav__item}>{content.Nav4}</a>
                         </nav>
                    </div>
                    <div>
                         <button className={styles.header__toggler} onClick={menuToggler}>
                              {menuOpen ? <IoIosClose /> : <BiMenuAltRight />}
                         </button>
                    </div>
               </div>
          </div>
     )
}