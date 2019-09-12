import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  card: {
    display: 'flex',
    marginTop: '3%', // 16:9
    width: '100%'
  },
  details: {
    display: 'flex',
    width: '100%'
  },
  content: {
    align: 'left',
  }
}));

const Restaurante = ({ name, address, open, closed }) => {
  const classes = useStyles();

  return (
    <div className={classes.details}>
      <CardContent className={classes.content}>
        <Typography  variant="h6" style={{color:"#FF5252"}}>
          {name}
        </Typography>
        <div className={classes.grow}></div>
        <Typography variant="body2" color="textSecondary" component="p" >
          {address } 
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <strong>Horario</strong> {open} - {closed}
        </Typography>    
      </CardContent> 
      <div className={classes.grow}></div>
    </div>
  );
}

export default Restaurante;
