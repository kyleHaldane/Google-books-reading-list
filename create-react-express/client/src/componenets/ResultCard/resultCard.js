import React from "react";
import { Container, Row, Col, Button,
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle} from 'reactstrap';

export default function resultCard(props){
    return(
        <div>
    <Container>
      <Card>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
        </CardBody>
        <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button outline color="secondary">view</Button>{' '}
          <Button outline color="secondary">submit</Button>{' '}
        </CardBody>
      </Card>
    </Container>
        </div>
    )
}