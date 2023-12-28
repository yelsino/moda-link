
import { defineMiddleware } from "astro:middleware";


export const onRequest = defineMiddleware( ({ locals, request }, next) => {
  const url = new URL(request.url);
  
  

  return next();
  
 })
