import React from 'react'
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import Link from 'next/link';
import styles from '../styles/redes.module.css'

const Redes = () => {
  return (
    <>
    <div className={styles.bg}>
         <div>
            <h2 className={styles.titulo}>Redes</h2>
            <h6 className={styles.h6}>No dudes en contactarme, o revisar mis redes!</h6>
        </div>
        

        <div className={styles.icons}>
          <Link href="https://github.com/EnzoPrina" legacyBehavior>
            <GitHubIcon className={styles.icon} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/enzo-prina-0b7a1b1b3/"
            legacyBehavior
          >
            <LinkedInIcon className={styles.icon} />
          </Link>
          <Link href="https://www.behance.net/enzoprina" legacyBehavior>
            <DeveloperModeIcon className={styles.icon} />
          </Link>
        </div>
        <h6 className={styles.derechos}>Todos los derechos reservados © 2023 Enzo Prina</h6>
    </div>

    </>
  )
}

export default Redes