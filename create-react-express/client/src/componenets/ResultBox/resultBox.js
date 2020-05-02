import ResultCard from "../ResultCard";
import React from "react";

function cardAndButtons(data){
  
}

export default function resultBox(props){
    return(
        <div>
          <a>Results</a>
          <hr />
          <div>
            {props.books.length ? (
              props.books.map(book => <ResultCard book ={book} />))
             : <h3>No Results to Display</h3>
             }
          </div>

        </div>
    )
}