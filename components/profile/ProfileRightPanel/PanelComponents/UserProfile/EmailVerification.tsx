import { EmailVerificationProps } from "@/types/profile";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import RightSignIcon from "@/public/assets/images/profile/rightSign.svg";

const EmailVerification = ({
  email,
  onChange,
  emailVerified,
  handleEmailVerify,
  error,
}: EmailVerificationProps) => (
  <div className="input-field-style flex flex-col gap-2">
    <label className="font-medium">Email</label>
    <div className="flex items-center gap-2 border border-gray-300 rounded-md px-2 ">
      <EnvelopeIcon className="w-[28px] h-[28px] text-gray-500" />
      <input
        type="email"
        name="email"
        value={email}
        onChange={onChange}
        className="outline-none bg-white w-full border-none focus:ring-0 "
        placeholder="Enter email"
      />
      {!emailVerified ? (
        <button
          type="button"
          onClick={handleEmailVerify}
          className="text-sm font-bold text-[#19C2BD]"
        >
          Verify
        </button>
      ) : (
        <Image src={RightSignIcon} alt="verified" width={20} height={20} />
      )}
    </div>
    {error && <span className="text-red-500 text-sm">{error}</span>}
  </div>
);

export default EmailVerification;
