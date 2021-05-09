const INITIAL_STATE = {
  items: [],
  filter_type: "",
  car_items: [],
  message: "",
  statusCode: 0,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "LIST_PRODUCTS":
      return {
        ...state,
        items: action.payload,
      };
    case "FILTER_PRODUCTS":
      return {
        ...state,
        items: action.payload.items,
        filter_type: action.payload.filter_type,
      };
    case "ADD_SHOPPING_CAR":
      let newCarItems = [...state.car_items];
      action.payload.map((item) => {
        newCarItems.push(item);
      });
      return {
        ...state,
        car_items: newCarItems,
      };
    case "ERROR":
      return {
        ...state,
        message: action.payload.message,
        statusCode: action.payload.statusCode,
      };

    default:
      return state;
  }
}
