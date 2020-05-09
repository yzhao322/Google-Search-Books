import React from "react";
import { CardDeck, Card, Button } from "react-bootstrap";
import "./style.css";

function BookList(){
  return (
    <div>
    <h4>Recommends</h4>
    <CardDeck>
    <Card>
          <Card.Img variant="top" src={"http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"} height="600px" />
      <Card.Body>
        <Card.Title>The Hunger Games</Card.Title>
        <Card.Text>
        Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.
        </Card.Text>
            <Button><a href={"http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api"}>View Detail</a></Button>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Suzanne Collins</small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src={"http://books.google.com/books/content?id=oPIMmQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"} />
      <Card.Body>
        <Card.Title>Harry Potter and the Goblet of Fire</Card.Title>
        <Card.Text>
        Young wizard-in-training Harry Potter prepares for a competition between Hogwarts School of Magic and two rival schools, develops a crush on Cho Chang, and wishes above all to be a normal fourteen-year-old.
        </Card.Text>
        <Button ><a href={"https://books.google.com/books?id=oPIMmQEACAAJ&dq=harry+potter&hl=&source=gbs_api"}>View Detail</a></Button>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">J. K. RowlingMary GrandPré</small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src={"http://books.google.com/books/content?id=CPgqCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"} />
      <Card.Body>
        <Card.Title>The Master Algorithm</Card.Title>
        <Card.Text>
        A thought-provoking and wide-ranging exploration of machine learning and the race to build computer intelligences as flexible as our own In the world's top research labs and universities, the race is on to invent the ultimate learning algorithm: one capable of discovering any knowledge from data, and doing anything we want, before we even ask. In The Master Algorithm, Pedro Domingos lifts the veil to give us a peek inside the learning machines that power Google, Amazon, and your smartphone. He assembles a blueprint for the future universal learner--the Master Algorithm--and discusses what it will mean for business, science, and society. If data-ism is today's philosophy, this book is its bible.
        </Card.Text>
        <Button><a href={"https://www.google.com/books/edition/The_Master_Algorithm/CPgqCgAAQBAJ?hl=en&gbpv=1&dq=The+Master+Algorithm&printsec=frontcover"}>View Detail</a></Button>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Pedro Domingos</small>
      </Card.Footer>
      </Card>
      </CardDeck>
      </div>
  );
}

export default BookList;
