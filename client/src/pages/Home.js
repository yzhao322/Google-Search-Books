import React from "react";
import BookList from "../components/BookList";
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";


const Home = () => {
  return (
    <Wrapper>
      <Header />
      <br></br>
     <BookList />
    </Wrapper>
  );
};

export default Home;
