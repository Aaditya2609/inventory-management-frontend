import axios from 'axios';

export const getItems= ()=>async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:9000/api/items');
      if(response.status===200)
      {
      dispatch({
        type: 'GET_ITEMS',
        payload: response.data.items,
      });
      }
    } catch (error) {
      console.error(error)
    }
};

export const deleteItem=(itemId) => async (dispatch) => {
      try {
        await axios.delete(`http://localhost:9000/api/items/${itemId}`);
        dispatch({
          type: 'DELETE_ITEM',
          payload: itemId,
        });
      } catch (error) {
       console.error(error)
      }
  };


export const updateItem = (itemId, updatedItemData) =>async(dispatch)=> {
    try {
      const response = await axios.post(`http://localhost:9000/api/items/update/${itemId}/`, updatedItemData);
      if(response.status===200)
      dispatch({
        type: 'UPDATE_ITEM',
        payload: response.data.updatedItem,
      });
    } catch (error) {
      console.error(error)
    }
};

export const addItem = (itemData) => async(dispatch)=>{
    try {
      const response = await axios.post('http://localhost:9000/api/items', itemData);
      if(response.status===201)
      dispatch({
        type: 'ADD_ITEM',
        payload: response.data.newItem,
      });
    } catch (error) {
     console.error(error)
    }
};
export const getSales= ()=>async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:9000/api/sales');
    if(response.status===200)
    {
    dispatch({
      type: 'GET_SALES',
      payload: response.data.sales,
    });
    }
  } catch (error) {
    console.error(error)
  }
};
