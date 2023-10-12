import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSales } from '../Actions/itemActions'

function Sales() {
    const sales = useSelector(state => state.sales)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSales())
    }, [dispatch])
    useEffect(() => {
    }, [sales])

    return (
        <div className='flex flex-col w-full items-center h-[100vh] overflow-auto'>
            <h1 className='text-3xl my-4 font-bold'>All Sales:</h1>
            <div className='flex gap-4 justify-center flex-wrap'>
                {
                    sales.map(item =>
                        <div key={item._id} className='border-2 p-2 border-[#00CED1] flex flex-col gap-2 items-start rounded-xl w-52'>
                            {
                                item.description.map(items => <div key={items._id} className='flex flex-col w-full border-2 p-2 border-[#00CED1] rounded-xl'>
                                    <p className='flex justify-between'>Name: <span>{items.item.name}</span></p>
                                    <p className='flex justify-between'>Quantity: <span>{items.quantity}</span></p>
                                    <p className='flex justify-between'>Price: <span>₹ {items.item.price}</span></p>
                                </div>)
                            }
                        <p className='flex justify-between w-full font-bold p-2 text-xl'> Amount: <span>₹ {item.amount}</span></p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Sales