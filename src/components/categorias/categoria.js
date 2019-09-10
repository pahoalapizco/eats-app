import React, { useState, useEffect  } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { withRouter } from "react-router";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '80%',
    marginTop: '5%', // 16:9
    alignSelf: 'center',
    marginLeft: '10%',
    borderRadius: '50%'
  },
  image: {
    position: 'relative',
    height: 300,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 150,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

 const Categoria = ({ _id, name, img, platillos, history }) => {
  const classes = useStyles();
  // const [platilloArray, setPlatillos] = useState(platillos)

  const handleClic = () => {
    history.push('/platillos', { platillos });
  }


  return (
    <div className={classes.root}>
        <ButtonBase
          focusRipple
          key={_id}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          onClick={handleClic}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${img})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            > 
              <strong> {name} </strong>
              <span className={classes.imageMarked} />        
            </Typography>
          </span>
        </ButtonBase>
    </div>
  );
}

export default withRouter(Categoria);
