import "./HeaderHigher.css";
import React, { useEffect, useState } from "react";

import Logotipo from "../../assets/logotipo.png";
import CarIcon from "../../assets/shopping-car.png";
import MotorcycleIcon from "../../assets/motorcycle.png";
import ClockIcon from "../../assets/clock.png";
import { useSelector } from "react-redux";

function HeaderHigher() {
  const car_items = useSelector((state) => state.product.car_items);
  const [quantityProducts, setQuantityProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setQuantityProducts(car_items.length);

    if (car_items.length) {
      let sum = 0;
      car_items.map((item) => {
        if (item.desconto > 0) {
          let preco = item.preco - item.preco * item.desconto;
          sum += preco;
        } else {
          sum += item.preco;
        }
      });
      setTotalPrice(sum);
    }
  }, [car_items]);

  return (
    <div className="header-higher">
      <div className="header-left">
        <div className="img">
          <img src={Logotipo} alt="LogoMarca" />
        </div>

        <div className="header-txt">
          <div className="container-title">
            <div className="title">
              <h1>Pet Friends Acessories</h1>
            </div>
            <div className="open-close">
              <img src={ClockIcon} alt="Aberto" />
              <p>ABERTO AGORA</p>
            </div>
          </div>

          <div className="container-address">
            <p>
              Avenida Rio Grande do Sul, 1520, Estados | 58030-021 | João Pessoa
              - PB
            </p>
          </div>

          <div className="container-delivery">
            <div className="time-delivery">
              <img src={MotorcycleIcon} alt="Moto Icon" />
              <p>
                Delivery: <span>35m - 1h:40m</span>
              </p>
            </div>

            <div className="text-delivery">
              <p>
                Entrega: <span>À partir de R$ 3,00</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="header-right">
        <div className="area-shopping-car">
          <div className="division"></div>

          <div className="shopping-car">
            <div className="car-icon">
              <img src={CarIcon} alt="Carrinho" />
            </div>
            <div className="quantity-products">
              <p className="quantity">
                {quantityProducts} Produtos no Carrinho
              </p>
              <p className="price">R$ {totalPrice.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderHigher;
