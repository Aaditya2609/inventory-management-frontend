import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getItems, getSales } from '../Actions/itemActions'
import AddSaleModal from './AddSaleModal'

function Sales() {
    const [showAddSaleModal,setShowAddSaleModal]=useState(false)
    const sales = useSelector(state => state.sales)
    const loading = useSelector(state => state.loading)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSales())
        dispatch(getItems())
    }, [dispatch])
    useEffect(() => {
        console.log("here")
        dispatch(getSales())
    }, [sales.length])

    return (
        <div>
        {loading?<div className='text-3xl my-4 font-bold items-center justify-center flex flex-col h-[100vh] w-full '>Loading Data....</div>:<div className='flex flex-col w-full items-center h-[100vh] overflow-auto pb-8'>
            <h1 className='text-3xl my-4 font-bold'>All Sales:</h1>
            <button onClick={() => setShowAddSaleModal(true)} className="m-1 flex items-center bg-[white] hover:bg-[#00CED1] hover:text-[white] text-xl text-[#00CED1] font-bold my-4 py-2 px-4 border-2 border-[#00CED1] rounded whitespace-nowrap">Add Sale</button>
            <div className='flex gap-4 justify-center flex-wrap'>
                {
                    sales.map(item =>
                        <div key={item._id} className='border-2 p-2 border-[#00CED1] flex flex-col gap-2 items-center justify-between rounded-lg w-52 overflow-auto h-[22rem] '>
                            <div className='flex flex-col gap-2 w-full'>{
                                item.description.map(items => <div key={items._id} className='flex flex-col w-full border-2 p-1 border-[#00CED1] rounded-xl'>
                                    <p className='flex justify-between'>Name: <span>{items.item?.name}</span></p>
                                    <p className='flex justify-between'>Quantity: <span>{items?.quantity}</span></p>
                                    <p className='flex justify-between'>Price: <span>₹ {items.item?.price}</span></p>
                                </div>)
                            }</div>
                        <p className='flex justify-between w-full font-bold p-2 text-xl'> Amount: <span>₹ {item.amount}</span></p>
                        </div>
                    )
                }
            </div>
            {showAddSaleModal&&<AddSaleModal setShowAddSaleModal={setShowAddSaleModal}/>}
        </div>}
        </div>
    )
}

export default Sales