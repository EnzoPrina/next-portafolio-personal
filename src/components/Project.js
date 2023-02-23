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
import Blog from "../../public/ProyectosFotos/BlogdeCafe.jpg";
/* import CardI from "./proyectos/CardI"; */
/* import CardII from "./proyectos/CardII"; */
/* import CardIII from "./proyectos/CardIII";
import CardIV from "./proyectos/CardIV";
import CardV from "./proyectos/CardV";
import CardVI from "./proyectos/CardVI";
import CardVII from "./proyectos/CardVII";
import CardVIII from "./proyectos/CardVIII"; */

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
                <Button className={styles.button} size="small" color="primary">
                  Ver proyecto
                </Button>
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
                <Button className={styles.button} size="small" color="primary">
                  Ver proyecto
                </Button>
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
                <Button className={styles.button} size="small" color="primary">
                  Ver proyecto
                </Button>
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
                <Button className={styles.button} size="small" color="primary">
                  Ver proyecto
                </Button>
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
                <Button className={styles.button} size="small" color="primary">
                  Ver proyecto
                </Button>
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
                <Button className={styles.button} size="small" color="primary">
                  Ver proyecto
                </Button>
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
                <Button className={styles.button} size="small" color="primary">
                  Ver proyecto
                </Button>
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
                <Button className={styles.button} size="small" color="primary">
                  Ver proyecto
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
