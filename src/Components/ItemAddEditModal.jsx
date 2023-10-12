import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, updateItem } from '../Actions/itemActions';

function ItemAddEditModal({ setShowItemAddEditModal, isUpdate, item }) {
  const [newItem, setNewItem] = useState({
    name: '',
    quantity: 0,
    price: 0,
    category: '',
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (isUpdate && item) {
      setNewItem({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        category: item.category,
      });
    }
  }, [isUpdate, item]);

  const handleAddOrUpdateItem = () => {
    if (newItem.name !== '' && newItem.quantity !== 0 && newItem.price !== 0 && newItem.category !== '') {
      if (isUpdate) {
        dispatch(updateItem(item._id, newItem));
      } else {
        dispatch(addItem(newItem));
      }
      setShowItemAddEditModal(false);
    } else {
      alert('Please fill in all the fields');
    }
  };

  return (
    <div>
      <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-70 z-100">
        <div className="bg-[rgba(255,255,255,1)] p-4 rounded-xl w-[35%]">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl self-start px-4 my-4 font-bold font-[manga] text-black">
              {isUpdate ? 'Update Item' : 'Add Item'}
            </h1>
            <button
              className="m-1 flex items-center bg-[white] hover:bg-[#00CED1] hover:text-[white] text-xl text-[#00CED1] font-bold my-4 py-1 px-2 border-2 border-[#00CED1] rounded-sm whitespace-nowrap"
              onClick={() => setShowItemAddEditModal(false)}
            >
              X
            </button>
          </div>
          <div className="flex flex-col items-center">
            <label className="flex gap-4 m-2 w-8/12 justify-between">
              Name
              <input
                className="border-2 border-black rounded-md px-2 py-1"
                value={newItem.name}
                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              ></input>
            </label>
            <label className="flex gap-4 m-2 w-8/12 justify-between">
              Quantity
              <input
                className="border-2 border-black rounded-md px-2 py-1"
                type="number"
                value={newItem.quantity}
                onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
              ></input>
            </label>
            <label className="flex gap-4 m-2 w-8/12 justify-between">
              Price
              <input
                className="border-2 border-black rounded-md px-2 py-1"
                type="number"
                value={newItem.price}
                onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
              ></input>
            </label>
            <label className="flex gap-4 m-2 w-8/12 justify-between">
              Category
              <select
                value={newItem.category}
                onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                className="border-2 border-black rounded-md px-2 py-1"
              >
                <option value={''}>None</option>
                <option value={'toys'}>toys</option>
                <option value={'appliances'}>appliances</option>
                <option value={'clothes'}>clothes</option>
              </select>
            </label>
            <button
              className="m-1 w-fit flex items-center bg-[white] hover:bg-[#00CED1] hover:text-[white] text-xl text-[#00CED1] font-bold my-4 py-2 px-4 border-2 border-[#00CED1] rounded whitespace-nowrap"
              onClick={() => handleAddOrUpdateItem()}
            >
              {isUpdate ? 'Update Item' : 'Add Item'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemAddEditModal;
