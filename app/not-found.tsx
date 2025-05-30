"use client";
import Image from "next/image";
import Link from "next/link";
import notFoundErrorImage from "@/public/assets/images/errors/page-not-found.webp";
import Button from "@/components/common/UI/Button";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const notFoundRoute = () => {
  return (
    <>
      <div className="pageNotFoundWrapper py-5 h-screen flex items-center justify-center">
        <div className="pageNotFoundInner text-center">
          <Image className="mx-auto mb-8 w-full"
            alt="maali-service"
            src={notFoundErrorImage}
            height={547}
            width={1719}
          />
          {/* <h2>Sorry, Page not found !!</h2> */}
          <p className="text-2xl text-teal-700">
            Sorry, that page never returned from a <br /> walk around the belgrade
          </p>
          <Link href="/" passHref>
            <Button
              className="common-button  mx-auto mt-8"
              content="Return to homepage"
              leftIcon={<ArrowLeftIcon className="size-5 text-white" />}
            />
          </Link>

        </div>
      </div>
    </>
  );
};

export default notFoundRoute;
