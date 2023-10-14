
const initialState = {
    items: [],
    sales:[],
    loading:false
  };
  
  const inventoryReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        return {
          ...state,
          items: [...state.items, action.payload],
          loading:false
        };
      case 'DELETE_ITEM':
        return {
          ...state,
          items: state.items.filter((item) => item._id !== action.payload),
          loading:false
        };
      case 'GET_ITEMS':
        return {
          ...state,
          items: action.payload,
          loading:false
        };
      case 'UPDATE_ITEM':
        return {
          ...state,
          items: state.items.map((item) =>
            item._id === action.payload._id ? action.payload : item
          ),
          loading:false
        };
        case 'ADD_SALE':
        return {
          ...state,
          sales: [...state.sales, action.payload],
          loading:false
        };

      case 'GET_SALES':
        return {
          ...state,
          sales: action.payload,
          loading:false
        };
        case 'FETCH_DATA':
          return {...state,loading:true}
        case 'FETCH_DATA_ERROR':
          return {...state,loading:false}
      default:
        return state;
    }
  };
  
  export default inventoryReducer;
  