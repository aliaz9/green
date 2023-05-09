import React from "react";
import { createClient } from "@supabase/supabase-js";
import dotenv from 'dotenv'
import { useEffect, useState } from "react";
import supabase from "./config/supabaseClient";


// const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);
// const supabase = createClient("https://bgitqfphuplxykecaexv.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJnaXRxZnBodXBseHlrZWNhZXh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyMDg2NTgsImV4cCI6MTk5ODc4NDY1OH0.Uzya4hqcBx7fEB9rwI7id3fZ9yqqIObzWdxRUHfqZkg");

// const products = [
//     {
//       id: 1,
//       title: 'Basic Tee',
//       href: '#',
//       imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
//       imageAlt: "Front of men's Basic Tee in black.",
//       price: '$35',
//       color: 'Black',
//     },
//     {
//         id: 2,
//         title: 'Basic Tee',
//         href: '#',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
//         imageAlt: "Front of men's Basic Tee in black.",
//         price: '$35',
//         color: 'Black',
//       },
//     // More products...
//   ]
  
  export default function Example() {

    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //   getProducts();
    // }, []);

    // async function getProducts() {
    //    const data = await supabase.from("test").select();
    //   //const { data: products, error } = await supabase.from("test").select();
    //   setProducts(data);
    // //  console.log(products)
    // }


const [ fetchError, setFetchError ] = useState(null);
const [ products, setProducts ] = useState(null);

useEffect( () => {

  const fetchProducts = async () => {

    const { data } = await supabase
    .from("toys")
    .select()


   // console.log(data)

    if(data) {
      setProducts(data);
      //setFetchError(null);
      console.log(products.title)
    }

  }
  
  fetchProducts()

}, [] );

    return (

      
      <div>
        <h1>JUGUETES</h1>

        {/* {fetchError && (<p>{fetchError}</p>)} */}
         {products && (
          <div>
            {products.map(p => (
              <p>{p.title}</p>
            ))}
          </div>
        )}

      </div>

    )
  }
  


