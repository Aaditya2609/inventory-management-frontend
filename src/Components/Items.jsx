import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItem, getItems } from '../Actions/itemActions'
import ItemAddEditModal from './ItemAddEditModal';

function Items() {
  const [showItemAddEditModal,setShowItemAddEditModal]=useState(false);
  const [isUpdate,setIsUpdate]=useState(false);
  const [updateItem,setUpdateItem]=useState({});
  const items = useSelector(state => state.items)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getItems())
  }, [dispatch])

  useEffect(() => {
  }, [items])
  
  const handleUpdate=(item)=>{
    setIsUpdate(true)
    setUpdateItem(item)
    setShowItemAddEditModal(true)
    
  }
  return (
    <div className='flex flex-col w-full items-center h-[100vh] overflow-auto`'>
      <h1 className='text-3xl my-4 font-bold'>All Items:</h1>
      <div className='flex gap-4 items-center justify-center flex-wrap'>
        {items?.map(item =>
          <div key={item._id} className='border-2 p-2 border-[#00CED1] flex flex-col items-start rounded-xl w-48'>
            <div className='flex w-full flex-col justify-between'>
            <p className='flex justify-between'>Name: <span>{item.name}</span></p>
            <p className='flex justify-between'>Quantity: <span>{item.quantity}</span></p>
            <p className='flex justify-between'>Price: <span>₹ {item.price}</span></p>
            <p className='flex justify-between'>Category: <span>{item.category}</span></p>
            </div>
            <div className=' w-full flex items-center justify-between'>         
          <button onClick={()=>handleUpdate(item)} className="m-1 flex items-center text-md  font-bold my-2 py-2 px-2 border-2 border-[#00CED1] rounded whitespace-nowrap">Edit</button>
          <button onClick={() => dispatch(deleteItem(item._id))} className="m-1 flex items-center text-md  font-bold my-2 py-2 px-2 border-2 border-[#00CED1] rounded whitespace-nowrap">Delete</button>
          </div>
          </div>
        )}
      </div>
      <button onClick={() => setShowItemAddEditModal(true)} className="m-1 flex items-center bg-[white] hover:bg-[#00CED1] hover:text-[white] text-xl text-[#00CED1] font-bold my-4 py-2 px-4 border-2 border-[#00CED1] rounded whitespace-nowrap">Add Item</button>
      {showItemAddEditModal && <ItemAddEditModal setShowItemAddEditModal={setShowItemAddEditModal} isUpdate={isUpdate} item={updateItem}/>}
    </div>
  )
}

export default Items