
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
{
  query getPlatillo($platilloID: ID) {
    getPlatillo(platilloID: $platilloID) {
      _id
      name
      description
      price
      img
      restaurant {
        _id
      }
    }
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
  const [getPlatillo, { loading, error, data }]= useQuery(GET_PLATILLO, {
    variables: { platilloID: history.location.state._id }
  })

  if (loading) return <Loading />

  return (
    <Card className={classes.card}>
        <CardMedia
          component="img"
          height="140"
          image="http://res.cloudinary.com/dmwsbri4c/image/upload/v1567117362/ejuoyamosem5c9iqux1b.jpg"
        />
        <div className={classes.grow}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
    </Card>
  );
}

export default withRouter(DetallePlatillo);
