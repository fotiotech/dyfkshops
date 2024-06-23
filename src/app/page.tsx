"use client";

import React, { useState, useEffect, useReducer } from "react";
import Image from "next/image";
import cartReducer from "../components/reducers/cartReducer";

export default function Page() {
  const [state, dispatch] = useReducer(cartReducer, { name: "dylan", age: 23 });
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("/api/customers"); // Adjust the URL to match your API route
        if (!res.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await res.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div>
      <div>
        <div className=" p-2 w-full border-b">
          <div className="flex flex-wrap gap-7 py-1">
            <div>
              <div className="w-14 h-14 mx-2 content-center rounded-full bg-[#eee] overflow-hidden">
                <Image
                  title="men"
                  alt=""
                  width={56}
                  height={56}
                  draggable="false"
                  src="/women.jpg"
                  className="block max-w-full"
                />
              </div>
              <div className="mt-1 w-full overflow-hidden">
                <p className="text-center text-sm  line-clamp-1">Women</p>
              </div>
            </div>
            <div>
              <div className="w-14 h-14 mx-2 content-center rounded-full bg-[#eee] overflow-hidden">
                <Image
                  title="men"
                  alt=""
                  width={56}
                  height={56}
                  src="/ment-shirt.webp"
                  className="block max-w-full"
                />
              </div>
              <div className="mt-1 w-full overflow-hidden">
                <p className="text-center text-sm  line-clamp-1">Men</p>
              </div>
            </div>
            <div>
              <div className="w-14 h-14 mx-2 content-center rounded-full bg-[#eee] overflow-hidden">
                <Image
                  title="men"
                  alt=""
                  width={56}
                  height={56}
                  src="/kids.jpg"
                  className="block max-w-full"
                />
              </div>
              <div className="mt-1 w-full overflow-hidden">
                <p className="text-center text-sm line-clamp-1">Kids</p>
              </div>
            </div>
            <div>
              <div className="w-14 h-14 mx-2 content-center rounded-full bg-[#eee] overflow-hidden">
                <Image
                  title="men"
                  alt=""
                  width={56}
                  height={56}
                  src="/casquette.jpg"
                  className="block max-w-full"
                />
              </div>
              <div className="mt-1 w-16 overflow-hidden line-clamp-1">
                <p className="text-center text-sm line-clamp-1">Hats</p>
              </div>
            </div>
            <div>
              <div className="w-14 h-14 mx-2 content-center rounded-full bg-[#eee] overflow-hidden">
                <Image
                  title="men"
                  alt=""
                  width={56}
                  height={56}
                  src="/girlbags.jpg"
                  className="block max-w-full"
                />
              </div>
              <div className="mt-1 w-16 overflow-hidden line-clamp-1">
                <p className="text-center text-sm line-clamp-1 ">Bags</p>
              </div>
            </div>
            <div>
              <div className="w-14 h-14 mx-2 content-center rounded-full bg-[#eee] overflow-hidden">
                <Image
                  title="men"
                  alt=""
                  width={56}
                  height={56}
                  src="/womenunderwear.jpg"
                  className="block max-w-full"
                />
              </div>
              <div className="mt-1 w-16 overflow-hidden line-clamp-1">
                <p className="text-center text-sm line-clamp-1">Underwear</p>
              </div>
            </div>
            <div>
              <div className="w-14 h-14 mx-2 content-center rounded-full bg-[#eee] overflow-hidden">
                <Image
                  title="men"
                  alt=""
                  width={56}
                  height={56}
                  src="/menshoes.jpg"
                  className="block max-w-full"
                />
              </div>
              <div className="mt-1 w-16 overflow-hidden line-clamp-1">
                <p className="text-center text-sm line-clamp-1">Men Shoes</p>
              </div>
            </div>
            <div>
              <div className="w-14 h-14 mx-2 content-center rounded-full bg-[#eee] overflow-hidden">
                <Image
                  title="men"
                  alt=""
                  width={56}
                  height={56}
                  src="/accessories.jpg"
                  className="block max-w-full "
                />
              </div>
              <div className="mt-1 w-16 overflow-hidden line-clamp-1">
                <p className="text-center text-sm line-clamp-1">Accessories</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 w-full p-2 border-b">
          <div className="w-[50%] content-center h-56 rounded-xl bg-[#eee] overflow-hidden">
            <Image
              title="men"
              alt=""
              width={200}
              height={224}
              src="/women.jpg"
              className="block max-w-full"
            />
          </div>
          <div className="flex flex-col gap-2 w-[50%] h-56">
            <div className="w-full h-[50%] content-center rounded-xl bg-[#eee] overflow-hidden">
              <Image
                title="men"
                alt=""
                width={200}
                height={224}
                src="/menshoes.jpg"
                className="block max-w-full"
              />
            </div>
            <div className="w-full h-[50%] content-stretch  rounded-xl bg-[#eee] overflow-hidden">
              <Image
                title="men"
                alt=""
                width={200}
                height={224}
                src="/sandal.jpg"
                className="block max-w-full"
              />
            </div>
          </div>
        </div>
        <div className="w-full p-2 border-b">
          <div>
            <p className="font-bold">Selected For You</p>
          </div>
          <div className="w-full whitespace-nowrap overflow-x-auto ">
            <div className="w-40 rounded-lg inline-block mx-2 p-2">
              <div className="w-full h-36 bg-[#eee] content-center overflow-hidden rounded-lg">
                <Image
                  title="men"
                  alt=""
                  width={200}
                  height={224}
                  src="/women4.jpg"
                  className="block max-w-full"
                />
              </div>
              <div>
                <p></p>
              </div>
            </div>
            <div className="w-40 rounded-lg inline-block mx-2 p-2">
              <div className="w-full h-36 bg-[#eee] content-center overflow-hidden rounded-lg">
                <Image
                  title="men"
                  alt=""
                  width={200}
                  height={224}
                  src="/ment-shirt.webp"
                  className="block max-w-full aspect-auto"
                />
              </div>
              <div>
                <p></p>
              </div>
            </div>
            <div className="w-40 rounded-lg inline-block mx-2 p-2">
              <div className="w-full h-36 bg-[#eee] rounded-lg"></div>
              <div>
                <p></p>
              </div>
            </div>
            <div className="w-40 rounded-lg inline-block mx-2 p-2">
              <div className="w-full h-36 bg-[#eee] rounded-lg"></div>
              <div>
                <p></p>
              </div>
            </div>
            <div className="w-40 rounded-lg inline-block mx-2 p-2">
              <div className="w-full h-36 bg-[#eee] rounded-lg"></div>
              <div>
                <p></p>
              </div>
            </div>
            <div className="w-40 rounded-lg inline-block mx-2 p-2">
              <div className="w-full h-36 bg-[#eee] rounded-lg"></div>
              <div>
                <p></p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full p-2">
          <div>
            <p className="font-bold ">Best Deals</p>
          </div>
          <div className="grid grid-cols-2 gap-3 w-full">
            <div className=" content-center h-36 rounded-lg bg-[#eee]">
              <Image
                title=""
                alt=""
                width={500}
                height={300}
                src={"/Fichier-1.png"}
                className="block max-w-full"
              />
            </div>
            <div className=" content-center h-36 rounded-lg bg-[#eee] overflow-hidden">
              <Image
                title=""
                alt=""
                width={500}
                height={300}
                src={"/image2.webp"}
                className="block max-w-full "
              />
            </div>
            <div className=" p-4 h-36 rounded-lg bg-[#eee]"></div>
            <div className=" p-4 h-36 rounded-lg bg-[#eee]"></div>
          </div>
        </div>
        <div className="p-2">
          <h2 className="font-semibold text-lg">Featured Selection</h2>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-2">
            {products.length > 0 &&
              products.map((product, index) => (
                <div key={index} className=" p-2">
                  <div className="w-full h-52 overflow-hidden content-center rounded-lg bg-slate-200 mb-1">
                    <Image
                      title="image"
                      alt=""
                      src={product.imagePath}
                      width={500}
                      height={300}
                      className="block max-w-full"
                    />
                  </div>
                  <div>
                    <p className=" line-clamp-2">{product.productName}</p>
                    <p>cfa {product.price}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
