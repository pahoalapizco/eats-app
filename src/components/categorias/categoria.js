import React from 'react';
import { 
  Card, 
  CardMedia,
   CardContent, 
   Typography,
   makeStyles
} from '@material-ui/core';

const Categoria = ({img, name}) => {   
  const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: '100%',
      alignSelf: 'center',
      marginTop: '5%', // 16:9
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  }));
  
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={img}
        title={name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {name}
        </Typography>
        </CardContent>
    </Card>
  )
  
}

export default Categoria;
