import axios from 'axios';

export const getItems = () => async (dispatch) => {
  try {
    dispatch({type: 'FETCH_DATA'});
    const response = await axios.get('https://inventory-management-rtfj.onrender.com/api/items');
    if (response.status === 200) {
      dispatch({
        type: 'GET_ITEMS',
        payload: response.data.items,
      });
    }
  } catch (error) {
    dispatch({type: 'FETCH_DATA_ERROR'});
    console.error(error)
  }
};

export const deleteItem = (itemId) => async (dispatch) => {
  try {
    dispatch({type: 'FETCH_DATA'});
    await axios.delete(`https://inventory-management-rtfj.onrender.com/api/items/${itemId}`);
    dispatch({
      type: 'DELETE_ITEM',
      payload: itemId,
    });
  } catch (error) {
    dispatch({type: 'FETCH_DATA_ERROR'});
    console.error(error)
  }
};


export const updateItem = (itemId, updatedItemData) => async (dispatch) => {
  try {
    dispatch({type: 'FETCH_DATA'});
    const response = await axios.post(`https://inventory-management-rtfj.onrender.com/api/items/update/${itemId}/`, updatedItemData);
    if (response.status === 200)
      dispatch({
        type: 'UPDATE_ITEM',
        payload: response.data.updatedItem,
      });
  } catch (error) {
    dispatch({type: 'FETCH_DATA_ERROR'});
    console.error(error)
  }
};

export const addItem = (itemData) => async (dispatch) => {
  try {
    dispatch({type: 'FETCH_DATA'});
    const response = await axios.post('https://inventory-management-rtfj.onrender.com/api/items', itemData);
    if (response.status === 201)
      dispatch({
        type: 'ADD_ITEM',
        payload: response.data.newItem,
      });
  } catch (error) {
    dispatch({type: 'FETCH_DATA_ERROR'});
    console.error(error)
  }
};
export const getSales = () => async (dispatch) => {
  try {
    dispatch({type: 'FETCH_DATA'});
    const response = await axios.get('https://inventory-management-rtfj.onrender.com/api/sales');
    if (response.status === 200) {
      dispatch({
        type: 'GET_SALES',
        payload: response.data.sales,
      });
    }
  } catch (error) {
    dispatch({type: 'FETCH_DATA_ERROR'});
    console.error(error)
  }
};
export const addSales = (saleData) => async (dispatch) => {
  try {
    dispatch({type: 'FETCH_DATA'});
    const response = await axios.post('https://inventory-management-rtfj.onrender.com/api/sales', saleData);
    console.log(response)
    if (response.status === 201) {
      dispatch({
        type: 'ADD_SALE',
        payload: response.data.newSale,
      });
    }
  } catch (error) {
    dispatch({type: 'FETCH_DATA_ERROR'});
    console.error(error)
  }
};
