import React, { useEffect, useState } from 'react';
import Product from './Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart]= useState([]);
    // console.log(cart);
    useEffect(()=>{
        const url=`https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    }, []);
    const handleAddToCart=(product)=>{
        const newCart =[...cart, product];
        setCart(newCart);
        // console.log(product);
    }
    return (
        <div className='grid md:grid-cols-4 relative'>
            <div className='md:col-span-3 text-center mt-8  '>
                <div className='grid grid-cols-3 gap-4 mx-10'>
                    {
                        products.map(product=><Product product={product} key={product.id} handleAddToCart={handleAddToCart}>
                        </Product>)
                    }
                </div>
                </div>
            <div className='bg-[#FF99004D] h-screen sticky top-14'>
                <h1 className='text-center font-bold text-2xl tracking-[4px] underline underline-offset-4'>Order Summary</h1>
                <div className='ml-6 mt-10'>
                    <p>Selected Items: {cart.length}</p>
                </div>
            </div>
        </div>
    );
};

export default Shop;