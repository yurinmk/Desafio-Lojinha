import "./Home.css";
import React from "react";
import Header from "../components/header/Header";
import ProductList from "../components/main/productList/ProductList";

// import { Container } from './styles';

function Home() {
  return (
    <div className="container-home">
      <header>
        <div className="container-header">
          <Header />
        </div>
      </header>
      <main>
        <div className="container-main">
          <ProductList />
        </div>
      </main>
    </div>
  );
}

export default Home;
