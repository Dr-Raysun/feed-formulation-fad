"use client"; // mark as client component
import Image from "next/image";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggler } from "./ThemeToggler";
import { useSelector } from "react-redux";
import { selectItems } from "@/lib/slice/basketSlice";
import { selectItemsFeed } from "@/lib/slice/pigSlice";

const Header = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const items = useSelector(selectItems); // for amazon basket
  const itemsFeed = useSelector(selectItemsFeed); // for pig feed

  return (
    <header className=" border-4 border-gray-800 flex items-center justify-between ">
      <Link
        href="/"
        className="border-2 border-red-500 flex items-center space-x-2"
      >
        <div className="bg-[#0160FE] w-fit">
          <Image
            src="https://www.shareicon.net/download/2016/07/13/606936_dropbox_2048x2048.png"
            alt="Dropbox clone logo"
            className="invert "
            width={50}
            height={50}
          />
        </div>
        <h1 className="font-bold text-xl">FeedApp</h1>
      </Link>
      {/* view all pig feed */}
      <div onClick={() => router.push("/checkoutfeed")} className="">
        <span className="">0{itemsFeed?.length} </span>
        <p className="">view feed</p>
      </div>
      <div className="px-5 flex space-x-2 items-center">
        {/* redirect to checkout page section */}
        {/* <div onClick={() => router.push("/checkout")} className="">
          <span className="">0{items?.length} </span>
          <p className="">Basket</p>
        </div> */}
        <div>
          <Link href="/farmer" className="flex  cursor-pointer p-2 w-fit ">
            Farmer
          </Link>
        </div>
        <div>
          <Link href="/admin" className="flex  cursor-pointer p-2 w-fit ">
            Admin
          </Link>
        </div>
        {/* log in and log out div */}
        <ThemeToggler />
        {session ? (
          <>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src={session?.user?.image as string} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>{session?.user?.email}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => signOut()}>
                  Log out
                </DropdownMenuItem>
                <DropdownMenuItem>Manage account</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <>
            <button onClick={() => signIn()}>sign in</button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
