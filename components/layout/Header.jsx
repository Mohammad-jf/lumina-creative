import Image from "next/image";
import Link from "next/link";

const Header = () => {
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
            <Link className="current" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
