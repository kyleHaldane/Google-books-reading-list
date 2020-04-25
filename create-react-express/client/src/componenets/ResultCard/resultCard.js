import React from "react";
import {
  Container, Row, Col, Button,
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';
import API from "../../utils/API";

function save(entry){
  API.saveBook(entry)
}

export default function resultCard(props) {
  // console.log(props.book.volumeInfo.imageLinks["thumbnail"]);
  return (
  <div>
    <Container>
    <Card>
      <CardBody >
      <CardTitle>{props.book.volumeInfo.title}</CardTitle>
      <CardSubtitle>{props.book.volumeInfo.authors.map( author => author+" ")}</CardSubtitle>
      </CardBody>
      <img width="15%" src={props.book.volumeInfo.imageLinks === undefined
        ? ""
        : `${props.book.volumeInfo.imageLinks.thumbnail}`} alt="Card image cap" />
      <CardBody>
      <CardText>{props.book.volumeInfo.description}</CardText>
      <Button outline color="secondary">view</Button>{' '}
      <Button 
        outline color="secondary"
        onClick={save}
        >save</Button>{' '}
      </CardBody>
    </Card>
    </Container>
  </div>
  )
}