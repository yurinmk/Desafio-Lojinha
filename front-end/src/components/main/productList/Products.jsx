import "./Products.css";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { addShoppingCar } from "../../../store/Product/actions";
import AddCarrinho from "../../../assets/add-carrinho.png";

function Products(props) {
  const dispatch = useDispatch();
  const { handleOpenModal, product } = props;
  const [newPrice, setNewPrice] = useState(product.preco);

  useEffect(() => {
    if (product.desconto > 0) {
      setNewPrice(product.preco - product.preco * product.desconto);
    }
  }, []);

  function addShopCar() {
    let items = [];

    items.push(product);

    dispatch(addShoppingCar(items));
  }
  return (
    <>
      <div className="products">
        <div className="details" onClick={() => handleOpenModal(product)}>
          {product.desconto > 0 && (
            <div className="discount">
              <p>{product.desconto * 100}% OFF</p>
            </div>
          )}

          <div className="product-img">
            <img
              src={`${process.env.REACT_APP_URL}${product.img_url}`}
              alt="Imagem do Produto"
            />
          </div>

          <div className="description">
            <p>{product.nome}</p>
          </div>
          <div className="price">
            <p>R$: {newPrice.toFixed(2)}</p>
          </div>
        </div>

        <img
          className="shopping-car"
          onClick={() => addShopCar()}
          src={AddCarrinho}
          alt="Adicionar ao carrinho"
        />
      </div>
    </>
  );
}

export default Products;
