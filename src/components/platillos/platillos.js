import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withRouter } from "react-router";

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
  iconStyle: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    color: "#FF5252",
  }
}));

const Platillo = ({ _id, name, description, price, img, history }) => {
  const classes = useStyles();
  const handleClic = () => {
    history.push('/platillo', { _id });
  }
  return (
    <div>
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
            <IconButton               
              aria-haspopup="true"
              className={classes.iconStyle}  
              onClick={handleClic} 
            >
              <Icon style={{color:"#FF5252"}}> remove_red_eye </Icon>
            </IconButton>  
          </CardContent> 
        </div>
        <div className={classes.grow}/>
        <CardMedia
          className={classes.cover}
          image={img}
          title={name}
        />
      </Card>
    </div>
  )
}


export default withRouter(Platillo);
