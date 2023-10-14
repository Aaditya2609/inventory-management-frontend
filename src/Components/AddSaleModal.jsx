import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSales } from '../Actions/itemActions';

function AddSaleModal({ setShowAddSaleModal }) {

    const items = useSelector((state) => state.items)
    const [newSale, setNewSale] = useState({
        description: [],
        amount: 0,

    });
    const dispatch = useDispatch();

    const totalAmount = newSale.description.reduce((acc, cv) => acc + cv.quantity * cv.price, 0)
    const handleAddItem = (id, price) => {
        const temp = { item: id, quantity: 1, price: price }
        const tempDesc = [...newSale.description, temp]
        const tempSale = { ...newSale, description: tempDesc, amount: totalAmount }
        setNewSale(tempSale)
    }


    const increaseQuantity = (id) => {
        const itemIndex = newSale.description.findIndex(item => item.item === id);
        if (itemIndex !== -1) {
            const updatedDescription = [...newSale.description];
            updatedDescription[itemIndex] = {
                ...updatedDescription[itemIndex],
                quantity: updatedDescription[itemIndex].quantity + 1
            };

            const tempSale = { ...newSale, description: updatedDescription, amount: totalAmount };
            setNewSale(tempSale);
        }
    }

    const decreaseQuantity = (id) => {
        const itemIndex = newSale.description.findIndex(item => item.item === id);

        if (itemIndex !== -1) {
            const updatedDescription = [...newSale.description];
            if (updatedDescription[itemIndex].quantity > 1) {
                updatedDescription[itemIndex] = {
                    ...updatedDescription[itemIndex],
                    quantity: updatedDescription[itemIndex].quantity - 1
                };
            } else if (updatedDescription[itemIndex].quantity === 1) {
                updatedDescription.splice(itemIndex, 1);
            }

            const tempSale = { ...newSale, description: updatedDescription, amount: totalAmount };
            setNewSale(tempSale);
        }
    }


    const handleAddSale = () => {
        const updatedDescription = newSale.description.map(item => {
            const { price, ...itemWithoutPrice } = item;
            return itemWithoutPrice;
        });

        const tempSale = { ...newSale, description: updatedDescription, amount: totalAmount };

        if (updatedDescription.length > 0 && totalAmount !== 0) {
            dispatch(addSales(tempSale));
            setShowAddSaleModal(false);
        } else {
            alert('Please fill in all the fields');
        }
    };


    return (
        <div>
            <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-70 z-100">
                <div className="bg-[rgba(255,255,255,1)] p-4 rounded-xl w-[35%] h-[80%] flex flex-col items-center">
                    <div className="flex justify-between items-center w-full">
                        <h1 className="text-3xl self-start px-4 my-4 font-bold text-black">
                            Add Sale
                        </h1>
                        <button
                            className="m-1 flex items-center bg-[white] hover:bg-[#00CED1] hover:text-[white] text-xl text-[#00CED1] font-bold my-4 py-1 px-2 border-2 border-[#00CED1] rounded-sm whitespace-nowrap"
                            onClick={() => setShowAddSaleModal(false)}
                        >
                            X
                        </button>
                    </div>
                    <h1 className="text-xl px-4 my-4 font-semibold text-black">
                        Select Items To Add:
                    </h1>
                    <div className="flex flex-col items-center h-[80%] w-full overflow-auto gap-4">

                        {
                            items.map(item => <div key={item._id} className='border-2 p-2 border-[#00CED1] flex flex-col rounded-xl  w-48'>
                                <div className='flex w-full flex-col justify-between'>
                                    <p className='flex justify-between'>Name: <span>{item.name}</span></p>
                                    <p className='flex justify-between'>Price: <span>₹ {item.price}</span></p>
                                    {newSale.description.find(items => items.item === item._id) ?
                                        <div className='flex-col items-center justify-between'>
                                            <div className='flex items-center justify-between'>
                                                <p>Quantity:</p>
                                                <div className='flex items-center gap-2'>
                                                    <button className="w-fit h-fit border-2 border-[#00CED1] rounded px-[7px]  bg-[white] hover:bg-[#00CED1] hover:text-[white] text-2xl text-[#00CED1] font-bold" onClick={() => decreaseQuantity(item._id)}>-</button>
                                                    <p>{newSale.description.find(items => items.item === item._id).quantity}</p>
                                                    <button className="w-fit h-fit border-2 border-[#00CED1] rounded px-1 pb-1 bg-[white] hover:bg-[#00CED1] hover:text-[white] text-xl text-[#00CED1] font-bold" onClick={() => increaseQuantity(item._id)}>+</button>

                                                </div>
                                            </div>
                                            <p className='flex justify-between'>Total Price: <span>{newSale.description.find(items => items.item === item._id).quantity * item.price}</span></p>
                                        </div>
                                        :
                                        <button className="w-fit self-center  border-2 border-[#00CED1] rounded p-1 my-1 bg-[white] hover:bg-[#00CED1] hover:text-[white] text-lg text-[#00CED1] font-semibold" onClick={() => handleAddItem(item._id, item.price)}>Add Item</button>}
                                </div>
                            </div>)
                        }

                    </div>
                    <h1 className="text-xl  px-4 my-4 font-semibold text-black">
                        Total Sale Amount : {totalAmount}
                    </h1>
                    <button
                        className="m-1 w-fit flex items-center bg-[white] hover:bg-[#00CED1] hover:text-[white] text-xl text-[#00CED1] font-bold my-4 py-2 px-4 border-2 border-[#00CED1] rounded whitespace-nowrap"
                        onClick={() => handleAddSale()}>
                        Add Sale
                    </button>

                </div>
            </div>
        </div>
    );
}

export default AddSaleModal;
