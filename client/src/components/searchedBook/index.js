import React from "react";
import { CardDeck, Card, Row } from "react-bootstrap";

function SearchedBook(props) {
    return (props.books.length === 0)
        ? (<div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>Search Results</h3>
                </div>
            </div>
        </div>)
        : (
            <div>
                <h4>Search Results</h4>
                {props.books.map(book => {
                    return (
                        <div key={book.id}>
                            <CardDeck>
                                <Card id={book.id}>
                                    <Row>
                                        <div className="col-sm-3">
                                            <Card.Img variant="top" src={book.image} height="300px" />
                                        </div>
                                    </Row>
                                    <Card.Body>
                                        <Card.Title>{book.title}</Card.Title>
                                        <Card.Text>
                                            {book.description}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">{book.author}</small>
                                    </Card.Footer>
                                </Card>
                                <button className="saveBook btn btn-primary" id={book.id} onClick={(event) => props.handleSavedButton(event)}>
                                    Save Book
                                </button>
                               
                                <button className="viewBook btn btn-success" >
                                     <a href={book.link} style={{color:"black"}}>
                                        View Book
                                         </a>
                                </button>
                               
                            </CardDeck>
                         <br></br>
                        </div>
                    );
                })}
            </div>)
}

export default SearchedBook;
