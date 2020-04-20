import React from "react";
import ResultBox from "../ResultBox";
import { Container, Row, Col, Button } from 'reactstrap';

export default function searchBox(){
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
            <div class="md-form mt-0">
            <input class="form-control" type="text" placeholder="Search" aria-label="Search"/>
            </div>
            <Button outline color="primary">search</Button>{' '}
            </Col>
        </Row>
        <ResultBox />
      </Container>
    </div>
  )
}