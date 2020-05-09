import React from "react";
import { CardDeck, Card, Row } from "react-bootstrap";

function SavedBook(props) {
    return (props.savedBooks.length === 0)
        ? (<div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>Saved Books</h3>
                </div>
            </div>
        </div>)
        : (
            <div>
                <h4>Saved Books</h4>
                {props.savedBooks.map(savedBook => {
                    return (
                        <div key={savedBook._id}>
                            <CardDeck>
                                <Card>
                                    <Row>
                                        <div className="col-sm-3">
                                            <Card.Img variant="top" src={savedBook.image} height="200px" />
                                        </div>
                                    </Row>
                                    <Card.Body>
                                        <Card.Title>{savedBook.title}</Card.Title>
                                        <Card.Text>
                                            {savedBook.description}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">{savedBook.author}</small>
                                    </Card.Footer>
                                </Card>
                                <button className="saveBook btn btn-primary" id={savedBook._id} onClick={(event) => props.handleDeleteButton(event)}>
                                    Delete
                                </button>
                               
                            </CardDeck>
                         <br></br>
                        </div>
                    );
                })}
            </div>)
}

export default SavedBook;
