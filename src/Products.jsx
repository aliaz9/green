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
  
  export default function Toys() {

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

        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <a key={product.id} href={product.href} className="group">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">{"$"+product.price}</p>
                </a>
              ))}
            </div>
          </div>
        </div>





        {/* {fetchError && (<p>{fetchError}</p>)} */}
         {/* {products && (
          <div>
            {products.map(p => (
              <div key={p.id}>
              <p>{p.title}</p>
              </div>
            ))}
          </div>
        )} */}

      </div>

    )
  }
  


