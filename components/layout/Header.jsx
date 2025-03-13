"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();

  return (
    <header className="header">
      <div className="container container-sm header-flex">
        <Image
          src="/images/logo.png"
          alt="logo"
          className="logo"
          width={130}
          height={30}
        />
        <ul className="main-menu">
          <li>
            <Link className={pathName == "/" ? "current" : ""} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className={pathName == "/about" ? "current" : ""}
              href="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={pathName == "/contactus" ? "current" : ""}
              href="/contactus"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
