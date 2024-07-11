"use client"
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const session = useSession()
  const user = session?.data?.user
  console.log(user);

  const navItem = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "SignUp",
      path: "/signup",
    },
  ];

  return (
    <div className=" bg-second py-4 ">
      <div className="flex justify-between  ">
        <div>
          <h1 className="font-poppins text-white px-3 text-xxl font-semibold">
            Code Blogs
          </h1>
        </div>
        <div>
          {navItem.map((d) => (
            <Link
              key={d.title}
              href={d.path}
              className="text-textmain font-semibold text-right mx-3"
            >
              {d.title}{" "}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
