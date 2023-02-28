import React from "react";
import styles from "../styles/project.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Image from "next/image";
import Dashboard from "../../public/ProyectosFotos/DashboardClient.jpg";
import Shop from "../../public/ProyectosFotos/ShopYardSale.jpg";
import DashboardYardSale from "../../public/ProyectosFotos/DashboardYardSaleShop.jpg";
import Seguimiento from "../../public/ProyectosFotos/SeguimientoPacientes.jpg";
import Planificador from "../../public/ProyectosFotos/PlanificadorDeGastos.jpg";
import Cripto from "../../public/ProyectosFotos/Criptomonedas.jpg";
import Noticias from "../../public/ProyectosFotos/Noticias.jpg";
import Notas from "../../public/ProyectosFotos/AppNotas.jpg";
import Blog from '../../public/ProyectosFotos/BlogdeCafe.jpg'
import Poke from '../../public/ProyectosFotos/Pokedex_Mesa de trabajo 1-min.jpg'
import Link from "next/link";


const Project = () => {
  return (
    <>
      <div className={styles.project}>
        <h3 className={styles.titulo}>Trabajos Realizados</h3>

        <div className={styles.container}>
          <div className={styles.card}>
            {" "}
            <Card sx={{ maxWidth: 400 }}>
              <CardActionArea className={styles.bgCard}>
                <div>
                  <Image
                    src={Dashboard}
                    alt="logo"
                    width={400}
                    className={styles.oscurecerImagen}
                  />
                </div>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                     /* color="text.primary" */ 
                  >
                    Dashboard
                  </Typography>
                  <Typography variant="body3"  /* color="text.secondary" */ >
                    Trabajo realizado para Centro de Estetica
                    <br />{" "}
                    <span className={styles.resaltado}>
                      {" "}
                      NEXT JS | JAVASCRIPT | REACT | MATERIAL UI
                    </span>
                  </Typography>
                </CardContent>
              </CardActionArea >
              <CardActions className={styles.bgBoton}>
              <Link href="https://dashboard-client-wheat.vercel.app/" legacyBehavior>
                <Button className={styles.button} size="small" color="primary">
                  Ver proyecto
                </Button>
                </Link>
              </CardActions>
            </Card>
          </div>

          <div className={styles.card}>
            <Card sx={{ maxWidth: 400 }}>
              <CardActionArea className={styles.bgCard}>
                <Image src={Shop} alt="logo" width={400} />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    /* color="text.primary" */
                  >
                    Shop YardSale
                  </Typography>
                  <Typography variant="body3" /* color="text.secondary" */>
                  Realizado con Reactjs, desde Figma y consulta a API
                    <br />{" "}
                    <span className={styles.resaltado}>
                      {" "}
                      REACT JS | JAVASCRIPT | TAILWINDCSS | 
                    </span>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={styles.bgBoton} >
              <Link href="https://yardsaleshop.netlify.app/" legacyBehavior>
                <Button className={styles.button} size="small" color="primary">
                  Ver proyecto
                </Button>
                </Link>
              </CardActions>
            </Card>
          </div>
          <div className={styles.card}>
           
            <Card sx={{ maxWidth: 400 }}>
              <CardActionArea className={styles.bgCard}>
                <Image src={DashboardYardSale} alt="dashboard" width={400} />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    /* color="text.primary" */
                  >
                    Dashboard ShopYardSale
                  </Typography>
                  <Typography variant="body3" /* color="text.secondary" */>
                    Dashboard de productos de tienda virtual YardSale
                    <br />{" "}
                    <span className={styles.resaltado}>
                      {" "}
                      NEXT JS | JAVASCRIPT | TAILWINDCSS
                    </span>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={styles.bgBoton} >
              <Link href="https://dashboard-nextjs-gamma.vercel.app/" legacyBehavior>
                <Button className={styles.button} size="small" color="primary">
                  Ver proyecto
                </Button>
                </Link>
              </CardActions>
            </Card>
          </div>
          <div className={styles.card}>
            <Card sx={{ maxWidth: 400 }}>
              <CardActionArea className={styles.bgCard}>
                <Image src={Seguimiento} alt="dashboard" width={400} />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    /* color="text.primary" */
                  >
                    Pacientes Veterinaria
                  </Typography>
                  <Typography variant="body3" /* color="text.secondary" */>
                    Administra tus pacientes, datos guardados en LocalStorage
                    <br />{" "}
                    <span className={styles.resaltado}>
                      {" "}
                      REACT JS | JAVASCRIPT | TAILWINDCSS
                    </span>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={styles.bgBoton} >
              <Link href="https://veterinaria-seguimientopacientes.netlify.app/" legacyBehavior>
                <Button className={styles.button} size="small" color="primary">
                  Ver proyecto
                </Button>
                </Link>
              </CardActions>
            </Card>
          </div>
          <div className={styles.card}>
            <Card sx={{ maxWidth: 400 }}>
              <CardActionArea className={styles.bgCard}>
                <Image src={Planificador} alt="dashboard" width={400} />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    /* color="text.primary" */
                  >
                    Planificador de Gastos
                  </Typography>
                  <Typography variant="body3" /* color="text.secondary" */>
                  Coloca el monto, pon tus montos con su categoria, y se descuenta automaticamente
                    <br />{" "}
                    <span className={styles.resaltado}>
                      {" "}
                      REACT JS | JAVASCRIPT | CSS3 | CHART JS
                    </span>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={styles.bgBoton} >
              <Link href="https://control-presup-gasto.netlify.app/" legacyBehavior>
                <Button className={styles.button} size="small" color="primary">
                  Ver proyecto
                </Button>
                </Link>
              </CardActions>
            </Card>
          </div>
          <div className={styles.card}>
            <Card sx={{ maxWidth: 400 }}>
              <CardActionArea className={styles.bgCard}>
                <Image src={Cripto} alt="dashboard" width={400} />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    /* color="text.primary" */
                  >
                    Cotizador de Criptomonedas
                  </Typography>
                  <Typography variant="body3" /* color="text.secondary" */>
                    Consulta con tus crypto favoritas al precio que cotizan
                    <br />{" "}
                    <span className={styles.resaltado}>
                      {" "}
                      REACT JS | VITE | STYLED COMPONENTS
                    </span>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={styles.bgBoton} >
              <Link href="https://cotiz-cripto.netlify.app/" legacyBehavior>
                <Button className={styles.button} size="small" color="primary">
                  Ver proyecto
                </Button>
                </Link>
              </CardActions>
            </Card>
          </div>
          <div className={styles.card}>
            <Card sx={{ maxWidth: 400 }}>
              <CardActionArea className={styles.bgCard}>
                <Image src={Noticias} alt="dashboard" width={400} />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    /* color="text.primary" */
                  >
                    MAGAZINE NOTICIAS
                  </Typography>
                  <Typography variant="body3" /* color="text.secondary" */>
                    Noticias del dia de hoy en Argentina! con todas las categorias
                    <br />{" "}
                    <span className={styles.resaltado}>
                      {" "}
                      NEXT  | JAVASCRIPT | TAILWINDCSS
                    </span>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={styles.bgBoton} >
              <Link href="https://magazine-notice.netlify.app/" legacyBehavior>
                <Button className={styles.button} size="small" color="primary">
                  Ver proyecto
                </Button>
                </Link>
              </CardActions>
            </Card>
          </div>
          <div className={styles.card}>
            <Card sx={{ maxWidth: 400 }}>
              <CardActionArea className={styles.bgCard}>
                <Image src={Notas} alt="dashboard" width={400} />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    /* color="text.primary" */
                  >
                    App de notas
                  </Typography>
                  <Typography variant="body3" /* color="text.secondary" */>
                    Escribe las notas del dia, toda informacion queda en LocalStorage
                    <br />{" "}
                    <span className={styles.resaltado}>
                      {" "}
                       JAVASCRIPT VANILLA | CSS3
                    </span>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={styles.bgBoton} >
              <Link href="https://add-new-note-app.netlify.app/" legacyBehavior>
                <Button className={styles.button} size="small" color="primary">
                  Ver proyecto
                </Button>
                </Link>
              </CardActions>
            </Card>
          </div>

          <div className={styles.card}>
            {" "}
            <Card sx={{ maxWidth: 400 }}>
              <CardActionArea className={styles.bgCard}>
                <div>
                  <Image
                    src={Blog}
                    alt="logo"
                    width={400}
                    className={styles.oscurecerImagen}
                  />
                </div>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                     /* color="text.primary" */ 
                  >
                    Blog de Cafe
                  </Typography>
                  <Typography variant="body3"  /* color="text.secondary" */ >
                    realizado como practica
                    <br />{" "}
                    <span className={styles.resaltado}>
                      {" "}
                      HTML5 | CSS3 | JAVASCRIPT VANILLA |
                    </span>
                  </Typography>
                </CardContent>
              </CardActionArea >
              <CardActions className={styles.bgBoton}>
              <Link href="https://tu-blogdecafe.netlify.app/" legacyBehavior>
                <Button className={styles.button} size="small" color="primary">
                  Ver proyecto
                </Button>
                </Link>
              </CardActions>
            </Card>
          </div>

          <div className={styles.card}>
            {" "}
            <Card sx={{ maxWidth: 400 }}>
              <CardActionArea className={styles.bgCard}>
                <div>
                  <Image
                    src={Poke}
                    alt="logo"
                    width={400}
                    className={styles.oscurecerImagen}
                  />
                </div>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                     /* color="text.primary" */ 
                  >
                    PokeDex
                  </Typography>
                  <Typography variant="body3"  /* color="text.secondary" */ >
                    Obten tus pokemons favoritos
                    <br />{" "}
                    <span className={styles.resaltado}>
                      {" "}
                      REACT NATIVE | EXPO CLI | STYLESHEET
                    </span>
                  </Typography>
                </CardContent>
              </CardActionArea >
              <CardActions className={styles.bgBoton}>
              <Link href="https://github.com/EnzoPrina/pokedex-r-native" legacyBehavior>
                <Button className={styles.button} size="small" color="primary">
                  Ver repositorio
                </Button>
                </Link>
              </CardActions>
            </Card>
          </div>

        </div>
      </div>
    </>
  );
};

export default Project;
