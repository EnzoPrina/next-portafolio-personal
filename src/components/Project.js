import React from 'react'
import styles from '../styles/project.module.css'
import Card from './Card'

const Project = () => {
  return (
<>
    <div className={styles.project}>
      
      <h3 className={styles.titulo}>Trabajos Realizados</h3>
      
      <div className={styles.container}>
        <div className={styles.card}><Card/></div>
        <div className={styles.card}><Card/></div>
        <div className={styles.card}><Card/></div>
        <div className={styles.card}><Card/></div>
        <div className={styles.card}><Card/></div>
        <div className={styles.card}><Card/></div>
        <div className={styles.card}><Card/></div>
        <div className={styles.card}><Card/></div>
        <div className={styles.card}><Card/></div>
        <div className={styles.card}><Card/></div>
        <div className={styles.card}><Card/></div>
        
      </div>
    </div>
</>

  )
}

export default Project