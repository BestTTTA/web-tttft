import { FC } from "react";
import { TbBrandFacebookFilled } from "react-icons/tb";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
const Footter: FC = () => {
  return (
    <div className="h-auto bg-black flex w-full flex-col pb-2">
      <div className="flex flex-wrap p-6">
        <div className="flex lg:flex-1/3 w-full lg:w-fit justify-center items-center p-6 ">
          <Link href="/">
            <Image
              src="/tttft_logo_white.png"
              alt="Thetigerteamfoundation Technology"
              height={40}
              width={200}
            ></Image>
          </Link>
        </div>
        <div className="flex flex-1 gap-8 flex-col w-full justify-center lg:pr-44 ">
          <div className="flex">
            <p className="text-white font-thin text-center text-sm">
              Thank you for considering PropIQ for your real estate needs. We
              look forward to hearing from you and assisting you on your real
              your real estate . We look forward to hearing from you and
              assisting you on your real estate .
            </p>
          </div>
          <div className="flex items-center ">
            <div className="flex w-full flex-wrap justify-evenly ">
              <p className="text-white font-thin ">+66 (0)98 916 2690</p>
              <p className="text-white font-thin ">
                thetigerteamacademy@gmail.com
              </p>
              <div className="flex ">
                <TbBrandFacebookFilled color="white" size={25} />
                <AiFillInstagram color="white" size={25} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-white font-thin text-sm">
        © 2023. All rights reserved
      </p>
    </div>
  );
};

export default Footter;
