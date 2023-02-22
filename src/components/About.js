import React from 'react'
import styles from '../styles/about.module.css'

const About = () => {
  return (
    <>
      <div className={styles.bg}>
          <div className={styles.titulo}>
                <h2>Sobre mi</h2>
          </div>
          <div className={styles.description}>
            <h3>Gracias por llegar hasta acá! Te voy a contar un poco de mí</h3>
              <p>Trabajé durante 3 años en imprenta gráfica, en el puesto de <span className={styles.resaltado}>Diseñador Grafico.</span>  <br/>
                Estaba encargado de diseño corporativo, branding y logotipos. Siempre tuve cercano el diseño en la familia. <br/>
                Estudie y Aprendí como autodidacta ya que estaba la vacante en ese puesto de trabajo y aproveche la oportunidad.  <br/>
                Con esta experiencia aprendí a como me desarrollo, no tengo dificultad aprender algo nuevo y me fortalezco mucho con la práctica. <br/>
                Actualmente soy <span className={styles.resaltado}>React Developer</span>  Tengo facilidad para crear buenos entornos,<br/> por mi personalidad relajada y productiva. Me gusta y no me 
                dificulta desarrollarme en equipo,<br/> siento que se aprende siempre con el conocimiento recíproco, la retroalimentacion de saberes en un grupo <br/>
                lo fortalece.
                </p>
          </div>
      </div>
    </>
  )
}

export default About