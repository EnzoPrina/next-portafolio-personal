import React from 'react'
import styles from '../styles/project.module.css'

import CardI from './proyectos/CardI'
import CardII from './proyectos/CardII'
import CardIII from './proyectos/CardIII'
import CardIV from './proyectos/CardIV'
import CardV from './proyectos/CardV'
import CardVI from './proyectos/CardVI'
import CardVII from './proyectos/CardVII'
import CardVIII from './proyectos/CardVIII'


const Project = () => {
  return (
<>
    <div className={styles.project}>
      
      <h3 className={styles.titulo}>Trabajos Realizados</h3>
      
      <div className={styles.container}>
        <div className={styles.card}><CardI/></div>
        <div className={styles.card}><CardII/></div>
        <div className={styles.card}><CardIII/></div>
        <div className={styles.card}><CardIV/></div>
        <div className={styles.card}><CardV/></div>
        <div className={styles.card}><CardVI/></div>
        <div className={styles.card}><CardVII/></div>
        <div className={styles.card}><CardVIII/></div>

        
      </div>
    </div>
</>

  )
}

export default Project