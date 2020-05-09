import React from "react";
import { Card } from "react-bootstrap";

function Header() {
    return (
        <Card>
        <Card.Img variant="top" src="./assets/imgs/header.jpg" height="360px" />
        <Card.Body>
          <Card.Text>
            Search For and Save Books from Google
          </Card.Text>
        </Card.Body>
      </Card>
    )
}
export default Header;