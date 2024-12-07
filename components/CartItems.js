import React, { useEffect, useState } from 'react'
import Cocktail from './Cocktail';
export default function CartItems() {
    const [cart,setCart]=useState([]);
    useEffect(()=>
    {
      const cart1=JSON.parse(localStorage.getItem("cart"))
      setCart(cart1);
    },[]);
    console.log("cart items before remove:",cart);
    const removeFromCart=(item)=>{
        const newCart=cart.filter((c)=>c.id!==item.id);
        console.log("new cart:",newCart);
        setCart(newCart);
        localStorage.setItem("cart",JSON.stringify(newCart));
    }
    
  return (
    <div>
        <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {cart.map((item) => {
          return <div><Cocktail key={item.id} {...item} />
           <button className='btn btn-primary btn-cart' onClick={()=>removeFromCart(item)}>remove from cart</button>
                 </div>;
        })}
      </div>
    </section>
    </div>
   
  )
}
