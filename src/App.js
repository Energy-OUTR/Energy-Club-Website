import React from "react";
import "./App.css";
import Carousel from "./Components/Carousel";
import Blogs from "./Components/Blogs";
import Masonry from "./Components/Masonry";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold">Hello world!</h1>
      <Masonry />
      <Carousel />
      <Blogs />
    </>
  );
}

export default App;
