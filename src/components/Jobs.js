
import React from 'react'
import styles from '../styles/jobs.module.css'

const Jobs = () => {
  return (
    <>
    <div className={styles.bgImage}>
      <div className={styles.jobs}>
              <div className={styles.titulo}>
                <h2>¿Por qué elegirme para desarrollar su sitio web?</h2>
              </div>
              <div className={styles.description}>
                <h3>Experiencia</h3>
                  <p>He desarrollado múltiples proyectos para diferentes emprendimentos, <br/>
                  por lo que el suyo cumpliría con los más altos estándares de calidad <br/>
                  (certificacion SSL, Paypal Standard, Mercado pago, etc)</p>
                <h3>Tratos Personales</h3>
                  <p>Evita perder tu tiempo hablando con bots automatizados, <br/>
                  responderé todas tus dudas en el horario disponible (mayor información en Contáctenos)</p>
                <h3>Evitate problemas con los pagos</h3>
                  <p>Un pago adelantado del 40% del total, y un 60% al haber culminado el trabajo, <br/>
                  puedes pagar por diferentes medios (Pago Efectivo, Mercado Pago, Transferencia Bancaria). <br/>
                  </p>
              </div>
      </div>
    </div>
    </>
  )
}

export default Jobs