import React from "react";
import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";


const example = [
    {
      id: 1,
      title: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
        id: 2,
        title: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
    // More products...
  ]

export default function Toys() {

  const [toys, setToys] = useState(null);

  useEffect(() => {

    const getToys = async () => {

      const { data } = await supabase
        .from("toys")
        .select()


      if (data) {
        setToys(data);
      }
    }

    getToys()

  }, []);

  return (

    <div>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {toys.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{"$" + product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

    </div>

  )
}
  


