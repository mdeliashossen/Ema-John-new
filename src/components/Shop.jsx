import React, { useEffect, useState } from 'react';
import Product from './Product';
import Cart from './Cart';
import { addToDb, getShoppingCart } from '../utilities/fakeDb';

const Shop = () => {
    const url=`https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json`;
    const [products, setProducts] = useState([]);
    const [cart, setCart]= useState([]);
    // console.log(cart);
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    }, []);

    const handleAddToCart=(product)=>{
        let newCart = [];
        // const newCart =[...cart, product];
        const exists = cart.find(pd=>pd.id === product.id);
        if(!exists){
            product.quantity=1;
            newCart = [...cart, product];
        }
        else{
            exists.quantity = exists.quantity +1;
            const remaining = cart.filter(pd=>pd.id !== product.id);
            newCart = [...remaining, exists];
        }
        setCart(newCart);
        addToDb(product.id);
    }
    useEffect(()=>{
        const storedCart = getShoppingCart();
        const savedCart=[];
        for(const id in storedCart){
            const addedProduct = products.find(product=>product.id === id)
           if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
           }
        }
        setCart(savedCart);

    }, [products])

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
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;