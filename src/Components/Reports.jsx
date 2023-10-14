import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function InventorySummary({ items, sales }) {
    const inventorySummary = items.map(item => {
        const totalQuantitySold = sales.reduce((total, sale) => {
            const saleItem = sale.description.find(saleItem => saleItem.item._id === item._id);
            return total + (saleItem ? saleItem.quantity : 0);
        }, 0);

        const remainingQuantity = item.quantity - totalQuantitySold;

        return (

            <div key={item.id} className='border-2 p-2 border-[#00CED1] flex flex-col items-start rounded-xl w-60'>
                <p className='flex justify-between w-full'>Name: <span>{item.name}</span></p>
                <p className='flex justify-between w-full'>Remaining Quantity: <span>{remainingQuantity}</span></p>
                <p className='flex justify-between w-full'>Category: <span>{item.category}</span></p>
            </div>
        );
    });

    return (
        <div>
            <h2 className='text-2xl my-4 font-bold'>Inventory Report</h2>
            <div className='flex gap-4 items-center justify-center flex-wrap'>
                {inventorySummary}</div>
        </div>
    );
}

function SalesReport({ items, sales }) {
    const totalRevenue = sales.reduce((acc, cv) => acc + cv.amount, 0)
    const inventorySummary = items.map(item => {
        const totalQuantitySold = sales.reduce((total, sale) => {
            const saleItem = sale.description.find(saleItem => saleItem.item._id === item._id);
            return total + (saleItem ? saleItem.quantity : 0);
        }, 0);



        return (
            <div key={item.id} className='border-2 p-2 border-[#00CED1] flex flex-col items-start rounded-xl w-52'>
                <p className='flex justify-between w-full'>Name: <span>{item.name}</span></p>
                <p className='flex justify-between w-full'>Quantity Sold: <span>{totalQuantitySold}</span></p>
                <p className='flex justify-between w-full'>Total Revenue: <span>₹ {totalQuantitySold * item.price}</span></p>
            </div>
        );
    });
    return (
        <div>
            <h2 className='text-2xl my-4 font-bold'>Sales Report</h2>
            <h2 className='text-2xl my-4 font-bold'>Total Revenue From Sales: ₹ {totalRevenue}</h2>
            <div className='flex  gap-4 items-center justify-center flex-wrap'>
                {inventorySummary}</div>
        </div>
    );
}

function Reports() {
    const [reportType, setReportType] = useState("")
    const items = useSelector((state) => state.items);
    const sales = useSelector((state) => state.sales);

    return (
        <div>
            <div className='flex flex-col w-full items-center h-[100vh] overflow-auto pb-8'>
                <h1 className='text-3xl my-4 font-bold'>Reports</h1>
                <div className='flex'>
                <button
                    className="m-1 w-fit flex items-center bg-[white] hover:bg-[#00CED1] hover:text-[white] text-xl text-[#00CED1] font-bold py-2 px-4 border-2 border-[#00CED1] rounded whitespace-nowrap"
                    onClick={() => setReportType("inventory")}>
                    Generate Inventory Report
                </button>
                <button
                    className="m-1 w-fit flex items-center bg-[white] hover:bg-[#00CED1] hover:text-[white] text-xl text-[#00CED1] font-bold py-2 px-4 border-2 border-[#00CED1] rounded whitespace-nowrap"
                    onClick={() => setReportType("sales")}>
                    Generate Sales Report
                </button>
                </div>
                {reportType==="inventory"?<InventorySummary items={items} sales={sales}/>:<div></div>}
                {reportType==="sales"?<SalesReport items={items} sales={sales} />:<div></div>}

            </div>
        </div>
    );
}

export default Reports;
