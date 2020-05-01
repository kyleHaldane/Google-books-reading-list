import React from "react";
import {
  Container, Row, Col, Button,
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';
import API from "../../utils/API";

export default function resultCard(props) {

  let data;

  function databaseOrApi(props) {
    if (props.book.volumeInfo != undefined) {
      data = {
        title: props.book.volumeInfo.title,
        authors: props.book.volumeInfo.authors,
        description: props.book.volumeInfo.description,
        image: props.book.volumeInfo.imageLinks === undefined
          ? ""
          : `${props.book.volumeInfo.imageLinks.thumbnail}`
      }
    }
    else
      data = {
        title: props.book.title,
        authors: props.book.authors,
        description: props.book.description,
        image: props.book.image
      }
    return data;
  }

  data = databaseOrApi(props);

  function save(event) {
    event.preventDefault();
    API.saveBook({
      title: props.book.volumeInfo.title,
      authors: props.book.volumeInfo.authors,
      description: props.book.volumeInfo.description,
      image: props.book.volumeInfo.imageLinks === undefined
        ? ""
        : `${props.book.volumeInfo.imageLinks.thumbnail}`
    })
  }

  console.log(typeof (data.authors));

  return (
    <div>
      <Container>
        <Card>
          <CardBody >
            <CardTitle>{data.title}</CardTitle>
            <CardSubtitle>{data.authors.map(author => author + " ")}</CardSubtitle>
          </CardBody>
          {/* <img width="15%" src={props.book.volumeInfo.imageLinks === undefined
            ? ""
            : `${props.book.volumeInfo.imageLinks.thumbnail}`} alt="Card image cap" /> */}
          <CardBody>
            <CardText>{data.description}</CardText>
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