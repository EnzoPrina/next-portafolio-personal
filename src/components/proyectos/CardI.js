import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Dashboard from '../../../public/ProyectosFotos/DashboardClient.jpg';
import Image from 'next/image';
import styles from '../../styles/project.module.css'

export default function CardI() {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
      <div >
            <Image  src={Dashboard} alt='logo' width={400} className={styles.oscurecerImagen}/>
            </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="text.primary">
            Dasoard
          </Typography>
          <Typography variant="body3" color="text.secondary">
            Trabajo realizado para Centro de Estetica
           <br/> <span className={styles.resaltado}> NEXT JS | JAVASCRIPT | REACT | MATERIAL UI</span>
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Ver proyecto
        </Button>
      </CardActions>
    </Card>
  );
}