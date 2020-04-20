import React from "react";
import SavedBox from "../componenets/SavedBox";
import { Container, Row, Col} from "reactstrap";
export default function saved(props){
    return(
        <div>
          <a>on saved page</a>
          <Container className="block-example border border-dark">
            <h5>Saved Books</h5>
            <SavedBox />
          </Container>
        </div>
    )
}