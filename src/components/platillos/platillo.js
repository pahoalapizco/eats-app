
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Loading from '../utils/loading';

const GET_PLATILLO = gql`
  query Platillo($platilloID: ID){
    getPlatillo(platilloID: $platilloID){
      _id
      name
      description
      img
      price
    }
  }
`;

const useStyles = makeStyles({
  grow: {
    flexGrow: 1
  },
  card: {
    maxWidth: 345,
    margin: '5%'
  }
});

const DetallePlatillo = ({ history }) => {
  const classes = useStyles();
  const { loading, error, data } = useQuery(GET_PLATILLO, {
    variables: { platilloID: history.location.state._id },
  })

  if (loading) return <Loading />
  if (error) return 'A ocurrido un error.. :c';
  const { _id, name, description, price, img } = data.getPlatillo;

  return (
    <Card className={classes.card}>
        <CardMedia
          component="img"
          height="140"
          image={img}
        />
        <div className={classes.grow}/>
        <CardContent>
          <Typography variant="h6" style={{color:"#FF5252"}}>
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {description}
          </Typography>
          <div className={classes.grow}/>
          <Typography variant="inherit" color="textSecondary" component="p">
          $ {price} MXN
          </Typography>  
        </CardContent>
    </Card>
  );
}

export default withRouter(DetallePlatillo);
