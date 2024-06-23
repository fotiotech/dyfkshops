"use client";

import axios from "axios";
import React, { useState } from "react";

const AddNew = () => {
  const [category, setCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [caracteristique, setCaracteristique] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState(null);
  const [price, setPrice] = useState(null);
  const [reduction, setReduction] = useState(null);
  const [devise, setDevise] = useState("");

  async function HandleData(ev) {
    ev.preventDefault();
    if (
      productName === "" ||
      description === "" ||
      price === null ||
      files === ""
    ) {
      alert("fill out all required cases");
    }

    const data = new FormData();

    // for (let i = 0; i < files.length; i++) {
    //   data.append("files", files[i]);
    // }
    data.append("files", files);
    data.append("category", category);
    data.append("productName", productName);
    data.append("caracteristique", caracteristique);
    data.append("description", description);
    data.append("price", price);
    data.append("reduction", reduction);
    data.append("devise", devise);

    try {
      await axios.post("/api/products/newProduct", data, {
        headers: { "Content-type": "multipart/form-data" },
      });
      alert("Registration successful.");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="w-full bg-white">
      <div className=" py-2">
        <div className="flex justify-between border-b-2">
          <h2 className=" text-2xl p-2 font-bold">New Product</h2>
          <div>
            <button
              type="submit"
              onClick={HandleData}
              className="border block font-medium mx-3 p-2 hover:bg-[#efefef] rounded-full"
            >
              Add
            </button>
          </div>
        </div>
        <div className="p-2">
          <div className=" w-full h-[555px] overflow-auto scrollbar-none">
            <div className="p-2 border rounded-xl mb-2 ">
              <h2 className="font-semibold text-xl m-2 ">Basic Information</h2>

              <div className="flex-col justify-between items-center">
                <div className="w-full p-2 border rounded-xl mb-2">
                  <label>
                    <p className=" text-lg font-medium my-2"> Image :</p>
                    <input
                      title="name of product"
                      type="file"
                      multiple
                      accept=".png, .jpg, .jpeg, .webp, .mp4"
                      onChange={(e) => setFiles(e.target.files[0])}
                      className="w-[80%] h-12 rounded-xl border mx-3 px-3 mb-2 font-medium"
                    />
                  </label>
                </div>
                <div className="w-full border rounded-xl">
                  <div className="px-2">
                    <label>
                      <p className=" text-lg font-medium my-2">Category :</p>

                      <select
                        name="Category"
                        onChange={(e) => setCategory(e.target.value)}
                        className=" w-[80%] h-12 rounded-xl border mx-3 px-3 mb-2 font-medium"
                      >
                        <option value="All Category">Electronics</option>
                        <option value="Header">Clothes</option>
                        <option value="Best Deals">Health</option>
                        <option value="Construction">Construction</option>
                        <option value="Health & Beauty">Health & Beauty</option>
                        <option value="Meubles">Meubles</option>
                        <option value="interior design">interior design</option>
                      </select>
                    </label>
                  </div>
                  <div className="p-2">
                    <label>
                      <p className=" text-lg font-medium my-2">
                        Product Name :
                      </p>
                      <input
                        title="name of product"
                        type="text"
                        onChange={(e) => setProductName(e.target.value)}
                        className="w-[80%] h-12 rounded-xl border mx-3 px-3 mb-2 font-medium"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-2 border rounded-xl ">
              <h2 className="font-semibold text-xl m-2 ">Basic Information</h2>
              <div className="flex-col justify-between items-center">
                <div className="w-full border rounded-xl mb-2">
                  <div className="px-2">
                    <label>
                      <p className=" text-lg font-medium my-2">
                        Specification :
                      </p>
                      <input
                        title="name of product"
                        type="text"
                        onChange={(e) => setCaracteristique(e.target.value)}
                        className="w-[80%] h-12 rounded-xl border mx-3 px-3 mb-2 font-medium"
                      />
                    </label>
                  </div>
                  <div className="p-2">
                    <label>
                      <p className=" text-lg font-medium my-2">Price :</p>
                      <input
                        title="name of product"
                        type="text"
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-[80%] h-12 rounded-xl border mx-3 px-3 mb-2 font-medium"
                      />
                    </label>
                  </div>
                </div>
                <div className="w-full  p-2 border rounded-xl mb-2">
                  <label>
                    <p className=" text-lg font-medium my-2">
                      Product Description :
                    </p>
                    <input
                      title="name of product"
                      type="text"
                      onChange={(e) => setDescription(e.target.value)}
                      className="w-[90%] h-44 rounded-xl border mx-3 px-3 mb-2 font-medium"
                    />
                  </label>
                </div>
              </div>
            </div>

            <div>
              <label>
                <p className=" text-lg font-medium my-2">Price Off :</p>
                <input
                  title="name of product"
                  type="text"
                  onChange={(e) => setReduction(e.target.value)}
                  className="border ml-2 p-1 px-2 mb-2"
                />
              </label>
            </div>
            <div>
              <label>
                <p className=" text-lg font-medium my-2">Devise :</p>

                <select
                  name="devise"
                  onChange={(e) => setDevise(e.target.value)}
                  className="w-60 border ml-2 p-1 px-2 mb-2"
                >
                  <option value="cfa">cfa</option>
                  <option value="xaf">xaf</option>
                  <option value="$">$</option>
                  <option value="euro">euro</option>
                </select>
              </label>
            </div>

            <button
              type="submit"
              onClick={HandleData}
              className="border block font-medium mx-3 p-2 hover:bg-[#efefef] rounded-full"
            >
              Add News
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNew;
