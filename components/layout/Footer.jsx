import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTumblr } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-flex">
        <Image src="/images/logo.png" width={130} height={35} />
        <div className="contact">
          <h4>Contact Us</h4>
          <ul>
            <li>(555) 555-5555</li>
            <li>contact@lumina.test</li>
            <li>10 main street Boston MA</li>
          </ul>
        </div>

        <div className="social">
          <h4>Follow us</h4>
          <Link href="#">
            <FaFacebookF size={30} />
          </Link>
          <Link href="#">
            <FaInstagram size={30} />
          </Link>
          <Link href="#">
            <FaPinterest size={30} />
          </Link>
          <Link href="#">
            <FaTwitter size={30} />
          </Link>
          <Link href="#">
            <FaTumblr size={30} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
