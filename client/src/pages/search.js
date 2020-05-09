import React, { useState } from "react";
import SearchedBook from "../components/searchedBook";
import Wrapper from "../components/Wrapper";
import SearchForm from "../components/SearchForm";
import API from "../utils/API";


const search = () => {
  const [books, setBookState] = useState([]);

  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = event => {
    setSearch(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    API.getGoogleSearchBooks(search)
            .then(res => {
                if (res.data.items === "error") {
                    throw new Error(res.data.items);
                }
                else {
                    let results = res.data.items
                  results = results.map(result => {
                    result = {
                      key: result.id,
                      id: result.id,
                      title: result.volumeInfo.title,
                      author: result.volumeInfo.authors,
                      description: result.volumeInfo.description,
                      image: result.volumeInfo.imageLinks.thumbnail,
                      link: result.volumeInfo.infoLink
                    }
                    return result;
                  });
                  setError("");
                  setBookState(results);
                  setSearch("");
                }
            })
            .catch(err => setError(err.items));
  };

const handleSavedButton = event => {
    event.preventDefault();
    let savedBooks = books.filter(book => book.id === event.target.id)
  savedBooks = savedBooks[0];
  console.log(savedBooks);
  API.saveBook(savedBooks)
      .then(alert("Book is Saved!"))
      .catch(err => console.log(err))
  };

  return (
      <Wrapper><br></br>
          <div className="row">
              <div className="col-sm-12">
          <SearchForm
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
          />
          <br></br>
        </div>
              <div className = "col-sm-12">
          <SearchedBook books={books} handleSavedButton={handleSavedButton}/>
            </div>
          </div>
  
    </Wrapper>
  );
};

export default search;