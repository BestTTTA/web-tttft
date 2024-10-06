import { FC } from "react";

const Footter: FC = () => {
  return (
    <div className="flex h-[270px] w-full bg-black">
      <div className="flex w-[20%] border justify-center items-center p-6">
        <img src="/tttft_logo_white.png" alt="Thetigerteamfoundation Technology" className="w-auto h-auto" />
      </div>
      <div className="flex w-[60%] border"></div>
      <div className="flex w-[20%] border"></div>
    </div>
  );
};

export default Footter;
