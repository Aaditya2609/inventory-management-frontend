
const initialState = {
    items: [],
    sales:[]
  };
  
  const inventoryReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      case 'DELETE_ITEM':
        return {
          ...state,
          items: state.items.filter((item) => item._id !== action.payload),
        };
      case 'GET_ITEMS':
        return {
          ...state,
          items: action.payload,
        };
      case 'UPDATE_ITEM':
        return {
          ...state,
          items: state.items.map((item) =>
            item._id === action.payload._id ? action.payload : item
          ),
        };
        case 'ADD_SALE':
        return {
          ...state,
          sales: [...state.sales, action.payload],
        };

      case 'GET_SALES':
        return {
          ...state,
          sales: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default inventoryReducer;
  