import Link from "next/link";
import Image from "next/image";
import BottomText from "../Body/BottomText";
import { ImLab } from "react-icons/im";
import { TbGridDots } from "react-icons/tb";

const Header = () => {
  return (
    <div className="w-full">
      <ul className="flex items-center justify-end space-x-4 p-3 sm:p-4 text-sm mr-2"> {/* Set fixed margin-right */}
        {/* Gmail link */}
        <li className="hover:underline">
          <Link href="https://mail.google.com/mail/">Home</Link>
        </li>

        {/* Images link */}
        <li className="hover:underline">
          <Link href="https://www.google.com/imghp?hl=en&authuser=0&ogbl">
            Contact
          </Link>
        </li>

        {/* Select Language */}
        <li className="p-2">
          <BottomText />
        </li>

        {/* Grid icon */}
        <li className="p-2 rounded-full hover:bg-gray-200">
          <TbGridDots size={20} />
        </li>

        {/* Profile image */}
        <li className="p-1 rounded-full hover:bg-gray-200">
          <Image
            src="/user.png"
            alt="Profile Photo"
            width={30}
            height={100}
            className="rounded-full object-cover"
            style={{ height: 30 }}
          />
        </li>
      </ul>
    </div>
  );
};

export default Header;