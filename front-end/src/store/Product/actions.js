import api from "../../utils/api";

export const listProducts = () => (dispatch, getState) => {
  api
    .get("/findAllProducts")
    .then((success) => {
      dispatch({
        type: "LIST_PRODUCTS",
        payload: success.data.success,
      });
    })
    .catch();
};

export const listProductsType = (type) => (dispatch, getState) => {
  let filter_type = "";

  switch (type) {
    case "brinquedos":
      filter_type = "Brinquedos";
      break;
    case "camas_casinhas":
      filter_type = "Camas e Casinhas";
      break;
    case "coleiras":
      filter_type = "Coleiras";
      break;
    case "ossos_petiscos":
      filter_type = "Ossos e Petiscos";
      break;

    default:
      filter_type = "Sugestão do Vendedor";
      break;
  }
  api
    .get(`/findAllProductsType/${type}`)
    .then((success) => {
      dispatch({
        type: "FILTER_PRODUCTS",
        payload: { items: success.data.success, filter_type },
      });
    })
    .catch();
};

export const addShoppingCar = (items) => (dispatch, getState) => {
  console.log(items);
  dispatch({
    type: "ADD_SHOPPING_CAR",
    payload: items,
  });
};
