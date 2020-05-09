import React, { useState, useEffect } from "react";
import API from "../utils/API";
import SavedBook from "../components/savedBook";
import Wrapper from "../components/Wrapper";

const saved = () => {
  const [savedBooks, savedBooksState] = useState([]);

  const HandleDeleteButton = id => {
    API.deleteBook(id)
    .then(res => useEffect())
    .catch(err => console.log(err))
  };

  useEffect(() => {
    API.getBooks()
      .then(res => {
        console.log(res);
        savedBooksState(res.data)
      })
    .catch(err => console.log(err))
  }, []);

  return (
    <Wrapper><br></br>
    <div className = "col-sm-12">
        <SavedBook savedBooks={savedBooks} HandleDeleteButton={HandleDeleteButton} />
    </div>

</Wrapper>
  );
};

export default saved;
