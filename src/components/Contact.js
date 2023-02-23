import React from 'react'
import styles from '../styles/contact.module.css'

const Contact = () => {
  return (
    <>
      <div className={styles.bg}>
        <div>
            <h2 className={styles.titulo}>Contactame</h2>
        </div>

<div>
  <section>
    <div className={styles.formulario} id="contacto" action>
      <form id="forms" action="https://formspree.io/f/mnqyqgoj" method="POST">
        {/* <h2 className={styles.tecn}>Contactame!</h2> */}
        <fieldset>
          <div className={styles.contenedorCampos}>      
            <div className={styles.campo}>
              <label htmlFor="name">Nombre Completo *</label>
              <input name="name" required id="name" className={styles.inputText} type="text" placeholder="Nombre" />
            </div>
            {/* <div class="campo">
                                          <label>Telefono</label>
                                          <input class="input-text" type="tel" placeholder="Tu telefono">
                                      </div> */}
            <div className={styles.campo}>
              <label>Correo *</label>
              <input name="email" required id="email" className={styles.inputText} type="text" placeholder="Tu Email" />
            </div>
            <div className={styles.campo}>
              <label htmlFor="message">Mensaje</label>
              <textarea id="message" name="message" className={styles.inputText} defaultValue={""} />
            </div>
            <input type="submit" defaultValue="Enviar" className={styles.enviarFormulario} />
          </div> {/* .contenedor-campos */}
        </fieldset>
      </form>
      {/* <a href="mailto:enzoprina9@gmail.com" id="trucazo">mail</a> */}
    </div>
    {/* boton  */}
  </section>
</div>

      </div>
    </>
  )
}

export default Contact