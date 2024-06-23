"use client";

import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Myprops {
  IdEdit: number;
}

const EditPage: React.FC<Myprops> = ({ IdEdit }) => {
  const [products, setProducts] = useState("");
  var [filterData, setFilterData] = useState("");
  const [category, setCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [caracteristique, setCaracteristique] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState(null);
  const [price, setPrice] = useState("");
  const [reduction, setReduction] = useState("");
  const [devise, setDevise] = useState("");

  async function HandleData(ev) {
    ev.preventDefault();
    if (
      productName === "" ||
      caracteristique === "" ||
      description === "" ||
      price === "" ||
      devise === "" ||
      files === ""
    ) {
      alert("fill out all required cases");
    }

    const data = new FormData();
    data.append("editid", IdEdit);
    data.append("category", category);
    data.append("productName", productName);
    data.append("caracteristique", caracteristique);
    data.append("description", description);
    data.append("files", files);
    data.append("price", price);
    data.append("reduction", reduction);
    data.append("devise", devise);

    try {
      await axios.put("/api/products/editProduct", data, {
        headers: { "Content-type": "multipart/form-data" },
      });
      alert("Edited successfully.");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    try {
      axios.get(`/api/products/editProduct`).then((response) => {
        setProducts(response.data);
      });
    } catch {
      (error: any) => {
        console.log(error);
      };
    }
  }, []);

  useEffect(() => {
    if (products && IdEdit) {
      const productResult = products.find((data) => data.product_id === IdEdit);
      setFilterData(productResult || null);
    }
    // return setFilterData(false);
  }, [products, IdEdit]);

  return (
    <div className=" absolute top-[-80px] right-0 w-[700px] bg-white border ">
      <p>EditPage</p>
      <p>Edit product</p>
      <div className="">
        {filterData ? (
          <div className=" w-full h-[480px] p-2 overflow-y-auto scrollbar-none border rounded-md">
            <div className="w-40 h-40 m-3 overflow-hidden ">
              <Image
                title="image"
                alt=""
                width={500}
                height={300}
                src={filterData.images}
                className=" w-auto h-auto"
              />
            </div>
            <div>
              <label>
                <p className=" text-lg font-medium py-1"> Image :</p>
                <input
                  title="name of product"
                  type="file"
                  accept=".png, .jpg, .jpeg, .webp, .mp4"
                  onChange={(e) => setFiles(e.target.files[0])}
                  className="border ml-2 mb-2 p-1"
                />
              </label>
              <label>
                <p className=" text-lg font-medium py-1">Category :</p>
                <select
                  name="Category"
                  onChange={(e) => setCategory(e.target.value)}
                  className=" w-60 border ml-2 p-1 px-2 mb-2 font-medium"
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
              <label>
                <p className=" text-lg font-medium py-1">Product Name :</p>
                <input
                  title="name of product"
                  type="text"
                  defaultValue={filterData.name}
                  onChange={(e) => setProductName(e.target.value)}
                  className="border ml-2 mb-2 p-1 px-2"
                />
              </label>
              <label>
                <p className=" text-lg font-medium py-1">Caracteristique :</p>
                <input
                  title="name of product"
                  type="text"
                  defaultValue={filterData.caracteristique}
                  onChange={(e) => setCaracteristique(e.target.value)}
                  className="border ml-2 mb-2 p-1 px-2"
                />
              </label>
              <label>
                <p className=" text-lg font-medium py-1">Price :</p>
                <input
                  title="name of product"
                  type="text"
                  defaultValue={filterData.price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="border ml-2 mb-2 p-1 px-2"
                />
              </label>
              <label>
                <p className=" text-lg font-medium py-1">Price Off :</p>
                <input
                  title="name of product"
                  type="text"
                  defaultValue={filterData.reduction}
                  onChange={(e) => setReduction(e.target.value)}
                  className="border ml-2 mb-2 p-1 px-2"
                />
              </label>
              <label>
                <p className=" text-lg font-medium py-1">Devise :</p>
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
              <label>
                <p className=" text-lg font-medium py-1">
                  Product Description :
                </p>
                <input
                  title="name of product"
                  type="text"
                  defaultValue={filterData.description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="border ml-2 mb-2 p-1 px-2"
                />
              </label>

              <button
                type="submit"
                onClick={HandleData}
                className="border block mx-5 p-2 rounded-full hover:bg-[#efefef]"
              >
                Save Changes
              </button>
            </div>
          </div>
        ) : (
          <p>hello</p>
        )}
      </div>
    </div>
  );
};

export default EditPage;
