import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const DashboardNavBar = () => {
  return (
    <div className="w-[70vw] h-[100vh] border">
      DashboardNavBar
      <div>
        <p>Menu</p>
        <ul>
          <li>Dashbord</li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <p>Products</p>
        <ul>
          <li>
            <ActiveLink href={"/dasboard/products"}>Products</ActiveLink>
          </li>
          <li>Orders</li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardNavBar;

function ActiveLink({ children, href }) {
  const router = useRouter();
  const style = {
    marginRight: 10,
    color: router.asPath === href ? "red" : "black",
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <Link href={href} onClick={handleClick} style={style}>
      {children}
    </Link>
  );
}
