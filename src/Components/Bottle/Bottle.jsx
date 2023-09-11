import React from 'react'

const Bottle = ({ bottle, bottleNumber, GrabdtotalPrice }) => {
    const { img, name, price } = bottle;
    return (
        <div className='flex justify-center flex-col text-center text-2xl font-bold space-y-2'>
            <h1>{name}</h1>
            <img src={img} alt="adida-bottle" className='h-[400px]' />
            <h1>{price}$</h1>
            <button onClick={() => {
                bottleNumber(bottle);
                GrabdtotalPrice(price);
            }
            } className='border p-1'>Add to cart</button>
        </div>
    )
}

export default Bottle