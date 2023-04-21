import styles from "./Header.module.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";

export default function Header( ){
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
                              <a href="#home" className={styles.nav__item}>Inicio</a>
                              <a href="#aboutme" className={styles.nav__item}>Sobre</a>
                              <a href="#projects" className={styles.nav__item}>Projetos</a>
                              <a href="#certificates" className={styles.nav__item}>Certificações</a>
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