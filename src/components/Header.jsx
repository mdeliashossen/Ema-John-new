import React from 'react';

const Header = () => {
    return (
        <nav className='text-white bg-[#1C2B35] md:flex lg:flex justify-between px-6 py-3 items-center sticky top-0 z-50'>
            <div>
            <h2  className='text-center text-2xl'>Ema-John</h2>
            </div>

            <div>
            <a href="/shop">Order</a>
            <a href="/order">Order Review</a>
            <a href="/inventory">Inventory</a>
            <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;