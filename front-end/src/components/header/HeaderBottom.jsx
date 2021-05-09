import "./HeaderBottom.css";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { listProductsType } from "../../store/Product/actions";

function HeaderBottom() {
  const dispatch = useDispatch();
  const [isFiltered, setIsFiltered] = useState(false);
  const [filterType, setFilterType] = useState(0);

  useEffect(() => {
    switch (filterType) {
      case 2:
        dispatch(listProductsType("brinquedos"));
        break;
      case 3:
        dispatch(listProductsType("camas_casinhas"));
        break;
      case 4:
        dispatch(listProductsType("coleiras"));
        break;
      case 5:
        dispatch(listProductsType("ossos_petiscos"));
        break;

      default:
        dispatch(listProductsType("todos"));
        break;
    }
  }, [filterType]);

  return (
    <div className="header-bottom">
      <section>
        <div
          className={filterType === 1 ? "menu-activated" : "menu-disabled"}
          onClick={() => {
            filterType === 1 ? setFilterType(0) : setFilterType(1);
          }}
        >
          Sugestão do Vendedor
        </div>
        <div
          className={filterType === 2 ? "menu-activated" : "menu-disabled"}
          onClick={() => {
            filterType === 2 ? setFilterType(0) : setFilterType(2);
          }}
        >
          Brinquedos
        </div>
        <div
          className={filterType === 3 ? "menu-activated" : "menu-disabled"}
          onClick={() => {
            filterType === 3 ? setFilterType(0) : setFilterType(3);
          }}
        >
          Camas e Casinhas
        </div>
        <div
          className={filterType === 4 ? "menu-activated" : "menu-disabled"}
          onClick={() => {
            filterType === 4 ? setFilterType(0) : setFilterType(4);
          }}
        >
          Coleiras
        </div>
        <div
          className={filterType === 5 ? "menu-activated" : "menu-disabled"}
          onClick={() => {
            filterType === 5 ? setFilterType(0) : setFilterType(5);
          }}
        >
          Ossos e Petiscos
        </div>
      </section>
    </div>
  );
}

export default HeaderBottom;
