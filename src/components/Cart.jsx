import React from 'react';

const Cart = ({cart}) => {
    let totalPrice =0;
    let totalShipping = 0;
   for (const product of cart){
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = (totalPrice*7)/100;
    const grandTotal = totalPrice + tax;
   
    // console.log(cart);
    return (
        <div>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price : {totalPrice}</p>
            <p>Total Shipping : {totalShipping}</p>
            <p>Tax : {tax}</p>
            <h6>Grand Total : {grandTotal}</h6>
        </div>
    );
};

export default Cart;