import "./Modal.css";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

import { addShoppingCar } from "../../../store/Product/actions";

import ShoppingCarIcon from "../../../assets/add-carrinho.png";
import PlusIcon from "../../../assets/mais.png";
import SubtractionIcon from "../../../assets/menos.png";
import CloseIcon from "../../../assets/fechar.png";

function Modal(props) {
  const { handleOpenModal, productModal } = props;
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [newPrice, setNewPrice] = useState(0);

  useEffect(() => {
    calculateDiscount();
  }, [count]);

  function modifyQuantity(type) {
    switch (type) {
      case "increment":
        setCount(count + 1);
        break;
      case "decrement":
        if (count === 1) {
          setCount(1);
        } else {
          setCount(count - 1);
        }
        break;
    }
  }

  function addShopCar() {
    let items = [];
    for (let i = 0; i < count; i++) {
      items.push(productModal);
    }
    dispatch(addShoppingCar(items));
  }

  function calculateDiscount() {
    const preco = productModal.preco * count;
    const precoDesconto = preco - preco * productModal.desconto;
    if (productModal.desconto > 0) {
      setNewPrice(precoDesconto.toFixed(2));
    } else {
      setNewPrice(preco.toFixed(2));
    }
  }

  return (
    <>
      <motion.div
        className="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.3,
          },
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.3,
          },
        }}
      />
      <motion.div
        className="modal-content-wrapper"
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
          transition: {
            duration: 0.3,
          },
        }}
        exit={{
          scale: 0,
          transition: {
            duration: 0.3,
          },
        }}
      >
        <motion.div className="modal-content">
          <div className="close-modal" onClick={handleOpenModal}>
            <img src={CloseIcon} alt="Fechar" />
          </div>

          <div className="container-product">
            <div className="product-img">
              {productModal.desconto > 0 && (
                <div className="discount">
                  <p>{productModal.desconto * 100}% OFF</p>
                </div>
              )}

              <img
                src={`${process.env.REACT_APP_URL}${productModal.img_url}`}
                alt=""
              />
            </div>

            <div className="price">
              <p>R$: {newPrice}</p>
              <div className="quantity">
                <input
                  type="number"
                  placeholder="1"
                  value={count}
                  onChange={(value) => setCount(value.target.value)}
                />
                <img
                  src={SubtractionIcon}
                  alt="Retirar Item"
                  onClick={() => {
                    modifyQuantity("decrement");
                  }}
                />
                <img
                  src={PlusIcon}
                  alt="Adicionar Item"
                  onClick={() => {
                    modifyQuantity("increment");
                  }}
                />
              </div>
              <div
                className="shopping-car"
                onClick={() => {
                  handleOpenModal(null);
                  addShopCar();
                }}
              >
                <img src={ShoppingCarIcon} alt="Adicionar ao Carrinho" />
              </div>
            </div>
          </div>

          <div className="description">
            <p className="description-title">{productModal.nome}</p>

            <p className="detailed-description">{productModal.descricao}</p>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Modal;
