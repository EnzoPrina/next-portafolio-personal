import React from "react";


import styles from "../styles/design.module.css";

const Design = () => {
  return (
    <>
    <div className={styles.bg}>
        <div className={styles.titulo}>
          <h2>Diseños Grafico & UI</h2>
          <h6>Puedes acceder a mi portafolio</h6>
      </div>
      <div className={styles.centrarButton}>
        <a href="https://www.behance.net/enzoprina">
          <button className={styles.button}>Behance</button>
        </a>
            
        </div>
    </div>


    </>
  );
};

export default Design;
