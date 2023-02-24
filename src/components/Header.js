import React from "react";
import styles from "../styles/header.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import Typography from '@mui/material/Typography';
import PDF from '../../public/EnzoPrina-FrontendDeveloper.pdf'
import Link from "next/link";

/* import Button from '@mui/material/Button'; */

const Header = () => {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.icons}>
          <Link href='https://github.com/EnzoPrina' legacyBehavior>
           <GitHubIcon className={styles.icon} />
          </Link>
          <Link href='https://www.linkedin.com/in/enzo-prina-0b7a1b1b3/' legacyBehavior>
            <LinkedInIcon className={styles.icon} />
          </Link>
          <Link href="https://www.behance.net/enzoprina" legacyBehavior>
            <DeveloperModeIcon className={styles.icon} />
          </Link>



        </div>

        <div className={styles.titulos}>
          <h1>
            <b>Hey! </b>Soy Enzo Prina
          </h1>
        </div>
        <div className={styles.titulosII}>
          <h2>Diseñador y Desarrollador Frontend</h2>
        </div>
        <div className={styles.titulosIII}>
          <p>React Developer | NextJS | Javascript | Typescript | Vite</p>
        </div>
        <div className={styles.centrarButton}>

          <ScrollLink to='my_cv' smooth={true}>
              

                <button className={styles.button}>
                  <a href={PDF} download='Enzo_Prina'>
                  Descargar CV
                  </a>
                  </button>


              
          </ScrollLink>


            
        </div>
  


      </div>
    </>
  );
};

export default Header;
