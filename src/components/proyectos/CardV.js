import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Planificador from '../../../public/ProyectosFotos/PlanificadorDeGastos.jpg';
import Image from 'next/image';
import styles from '../../styles/project.module.css'

export default function CardV() {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
            <Image src={Planificador} alt='dashboard' width={400}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="text.primary">
            Shop YardSale
          </Typography>
          <Typography variant="body3" color="text.secondary">
            Tienda Virtual
           <br/> <span className={styles.resaltado}> REACT JS | JAVASCRIPT | TAILWINDCSS</span>
            
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