import React from "react";
import { Card, ListGroupItem, ListGroup, Button, InputGroup, FormControl} from "react-bootstrap";

function SearchForm(props){
  return (
<Card style={{ width: '30rem' }}>
  <Card.Body>
    <Card.Title>Search Your Books</Card.Title>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem></ListGroupItem>
  </ListGroup>
  <Card.Body>
    <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text>Title</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
            placeholder="Enter Book Name"
            value={props.search}
            name="searchBook"
            onChange={props.handleInputChange}
    />
    </InputGroup>
        <Button onClick={props.handleFormSubmit}>Submit</Button>
  </Card.Body>
</Card>
  );
}

export default SearchForm;
