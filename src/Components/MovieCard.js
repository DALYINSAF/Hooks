import React from "react";
import { Button, Card } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";

const MovieCard = ({ film }) => {
  return (
    <div>
     <Card  style={{ width: '18rem' }}>
      
  <Card.Img width='200px' height="200px" variant="top" src={film.posterurl}/>
  <Card.Body>
  <Rating  ratingValue={film.rate} readonly={true} /* Available Props */ />
    <Card.Title> {film.title}</Card.Title>
    <Card.Text>
      {film.descreption}
    </Card.Text>
    <Button variant="primary">See it</Button>
  </Card.Body>
</Card>
    </div>
  );
};

export default MovieCard;