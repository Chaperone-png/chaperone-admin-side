import Image from "next/image";
import Link from "next/link";
import "./footer.scss";
import {
  COPYRIGHT_TEXT,
  COPYRIGHT_LINK,
  COPYRIGHT_OWNER,
  COPYRIGHT_RIGHTS,
} from "@/configs/constants/public";

const Footer = () => {
  return (
    <footer className="bg-gr text-center">
      <div className="d-flex flex-row justify-center items-center flex-col gap-4">
        {/* <Image
          alt="Chaperone Logo"
          src={logoImage}
          height={40}
          width={40}
          priority={false}
        /> */}

        <p className="text-sm">
          {COPYRIGHT_TEXT}{" "}
          <Link
            href={COPYRIGHT_LINK}
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            {COPYRIGHT_OWNER}
          </Link>
          . {COPYRIGHT_RIGHTS}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
