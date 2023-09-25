import React from "react";

const Product = (props) => {
    const { img, name, price, quantity, ratings,seller } = props.product;
   const handleAddToCart = props.handleAddToCart;
    // console.log(props);
  return (
    
        <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-64"
            src={img?img:''}
            alt="Product"
          />
        </figure>
        <div className="card-body relative">
          <h2 className="card-title text-left">{name}</h2>
          <span className="text-left">$ {price}</span>
          <span className="text-left">Manufacturer: {seller}</span>
          <p className="text-left mb-8">Ratings: {ratings}</p>
          <div className="flex justify-center">
            <button onClick={()=>handleAddToCart(props.product)} className="btn btn-warning bg-[#FF99004D] hover:bg-yellow-400 absolute bottom-0 w-full rounded-b-2xl rounded-t-none">Add to Cart</button>
          </div>
        </div>
      </div>
    
  );
};

export default Product;
