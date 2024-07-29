"use server";

import { signIn, signOut } from "@/auth";


export async function fetchAllProducts() {
  try {
    const apiResponse = await fetch("https://dummyjson.com/products", {
      method: "Get",
      cache: "no-store",
    });
    const data = await apiResponse.json();
    return {
        success : true,
        data : data?.products,
        message : "data fetched"
    }
  } catch (err) {
    console.log(err);
    return {
        success : false,
        message : "something went wrong!plx try again"
    }
  }
}

export async function fetchProductDetails(currentProductId) {
  try{
    const result = await fetch(`https://dummyjson.com/products/${currentProductId}`,{
      method : "GET",
      cache : 'no-store'
    })

    const data = await result.json();
    return data
  }
  catch(err){
    console.log(err);
    return {
      success : false,
      message : "Something went wrong! plz try again"
    }
  }
}

export async function loginAction(){
  await signIn("github");
}

export async function logoutAction(){
  await signOut();
}