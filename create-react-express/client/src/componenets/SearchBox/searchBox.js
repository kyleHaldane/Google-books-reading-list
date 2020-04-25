import React from "react";
import ResultBox from "../ResultBox";
import { Container, Row, Col, Button } from 'reactstrap';
import { Input } from "../Form";

export default function searchBox(props){
  return(
  <div>
    <Container className="block-example border border-dark">
    <Row>
      <Col>
      <a>book search</a>
      </Col>
    </Row>
    <Row>
      <Col>
      <a>book</a>
      </Col>
    </Row>
    <Row>
      <Col>
      <div className="md-form mt-5">
      <Input type="text" placeholder="Search" aria-label="Search"
         onChange={props.handleInputChange}
         name="search"
         placeholder="search book (required)" 
      />
      </div>
      <Button outline color="primary"
        onClick={props.handleSearchSubmit}
      >search</Button>{' '}
      </Col>
    </Row>
    </Container>
  </div>
  )
}