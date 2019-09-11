import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  card: {
    display: 'flex',
    marginTop: '5%', // 16:9
    width: '100%'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '60%'

  },
  content: {
    flex: '1 0 auto',
    align: 'left',
    
  },
  cover: {
    width: '40%',
  },
}));

const Platillo = ({ name, description, price, img }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
    <div className={classes.details}>
      <CardContent className={classes.content}>
        <Typography  variant="h6" style={{color:"#FF5252"}}>
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" noWrap>
         {description}
        </Typography>
        <Typography variant="inherit" color="textSecondary" component="p">
         $ {price} MXN
        </Typography>
      </CardContent>       
    </div>
    <div className={classes.grow}/>
    <CardMedia
      className={classes.cover}
      image={img}
      title={name}
    />
  </Card>
  )
}


export default Platillo;
