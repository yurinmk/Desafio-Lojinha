import "./ProductList.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";

import { listProducts } from "../../../store/Product/actions";

import Products from "./Products";
import Modal from "./Modal";
import SearchIcon from "../../../assets/search.png";

// import { Container } from './styles';

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.items);
  const title = useSelector((state) => state.product.filter_type);
  const [openModal, setOpenModal] = useState(false);
  const [search, setSearch] = useState("");
  const [productModal, setProductModal] = useState({});

  useEffect(() => {
    dispatch(listProducts());
  }, []);

  function handleOpenModal(product) {
    setOpenModal(!openModal);
    setProductModal(product);
  }

  const filterProducts = products.filter((product) => {
    return product.nome.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  function sendProducts() {
    return filterProducts.map((product) => {
      return (
        <Products
          key={product.id}
          handleOpenModal={handleOpenModal}
          product={product}
        />
      );
    });
  }
  return (
    <div className="container-productList">
      <div className="container-search">
        <div className="search">
          <input
            type="text"
            placeholder="O que você procura?"
            value={search}
            onChange={(text) => setSearch(text.target.value)}
          />
          <img src={SearchIcon} alt="Pesquisar" />
        </div>
      </div>

      <div className="title">
        <p>{title}</p>
      </div>

      <div className="container-products">
        <section>{sendProducts()}</section>
      </div>

      <AnimatePresence>
        {openModal && (
          <Modal
            handleOpenModal={handleOpenModal}
            productModal={productModal}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default ProductList;
