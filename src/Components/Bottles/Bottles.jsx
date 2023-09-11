import React, { useEffect, useState } from 'react'
import Bottle from '../Bottle/Bottle';
import { addToCart, searchItemInLCS } from '../Utils/LCS/LCS';

const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    const [bottleCount, setBottleCount] = useState([]);
    const [totalPrice, setPrice] = useState(0);

    useEffect(() => {
        fetch('bottle.json')
            .then(res => res.json())
            .then(data => setBottles(data));
    }, [])

    useEffect(() => {
        const cartItem = searchItemInLCS();
        console.log(cartItem)
    }, [])

    const bottleNumber = bottle => {
        // console.log('bottle added')
        const length = [...bottleCount, bottle];
        setBottleCount(length);
        // ! add korbo local e
        addToCart(bottle.id);
    }

    const GrabdtotalPrice = (price) => {
        setPrice(totalPrice + price);
    }

    return (
        <div>
            <div className='text-center'>
                <h1 className='text-4xl font-bold text-center m-4'>Here Yout Cart added Product</h1>
                <h1 className='text-2xl'>Item Count : <strong>{bottleCount.length}</strong> Piece</h1>
                <h1 className='text-2xl'>Total Price : <strong>{totalPrice <= 0 ? '00' : totalPrice}</strong> $</h1>
            </div>
            <hr className='bg-black h-1 mt-4'/>
            <h1 className='text-4xl font-bold text-center m-4'>Here Our Products</h1>
            <div className='grid grid-cols-1 gap-5 md:gap-20 lg:gap-24 md:grid-cols-2 lg:grid-cols-3'>
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id}
                        bottle={bottle}
                        bottleNumber={bottleNumber}
                        GrabdtotalPrice={GrabdtotalPrice}
                    />)
                }
            </div>
        </div>

    )
}

export default Bottles