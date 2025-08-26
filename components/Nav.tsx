"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  SignUpButton,
} from "@clerk/nextjs";
import { cn } from "@/lib/utils";
const navItems = [
  { label: "Home", href: "/" },
  { label: "Companion", href: "/companion" },
  { label: "My Journey", href: "my-journey" },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className=" fixed w-full flex justify-around py-2 bg-white">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image src="/images/logo.svg" alt="logo" width={46} height={44} />
        </div>
      </Link>
      <div className="flex items-center gap-8">
        <nav className="flex items-center gap-4">
          {navItems.map(({ label, href }) => (
            <Link
              href={href}
              key={label}
              className={cn(
                pathname === href && "text-orange-500 font-semibold",
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
        <SignedOut>
          <SignUpButton>SignUp</SignUpButton>
          <SignInButton>
            <button className="btn-signin">Sign In</button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Nav;
