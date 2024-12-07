import React,{useState} from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";
import { toast } from 'react-toastify';

export default function CocktailList() {
  const { cocktails, loading } = useGlobalContext();
  const [cart,setCart]=useState([]);
  const saveToLocalStorage=(items)=>{
    localStorage.setItem("cart",JSON.stringify(items));
  }
  const addToCart=(item)=>{
    const newCart=[...cart,item];
    console.log("cart bef",newCart);
    setCart(newCart)
    toast.success('Successfully created!');

    console.log("cart:",newCart);

    saveToLocalStorage(newCart);
  }
  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return <h2 className="section-title">oops! No matches found.</h2>;
  }
  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((item) => {
          return <div><Cocktail key={item.id} {...item} />
             <button className='btn btn-primary btn-cart' onClick={()=>addToCart(item)}>add to cart</button>
          </div>;
        })}
      </div>
    </section>
  );
}
