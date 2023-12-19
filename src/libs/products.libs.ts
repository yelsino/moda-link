import type { Product } from "./interfaces";

export const orderProducts = (products:Product[]) => {
  const  orderData = products.sort((a: Product, b: Product)=>{
    const likesA = Number(a.likes);
    const likesB = Number(b.likes);
  
    return likesB - likesA;
  });

  return orderData
}