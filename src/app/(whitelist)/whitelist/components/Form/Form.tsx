"use client";
import { useEffect, useRef, useState } from "react";
import { Roboto } from "next/font/google";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import Button from "@/app/ui/Button/Button";
import { useAccount, useDisconnect } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import fontTitle from "next/font/local";
import axios from "axios";

const title = fontTitle({
  src: "../../../../../../public/assets/fonts/ClashDisplayBold.woff",
});

const fontHeading = Roboto({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-heading",
});

interface FormErrors {
  name: string;
  email: string;
  addressWallet: string;
  /* message: string; */
}

const Form = () => {
  const recaptcha = useRef<any>(null);
  const form = useRef<any>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  /*   const [message, setMessage] = useState(""); */
  const [addressWallet, setAddressWallet] = useState("");
  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    email: "",
    addressWallet: "",
    /*     message: "", */
  });

  const [loadings, setLoadings] = useState<boolean[]>([]);
  const [captchaVerified, setCaptchaVerified] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    else if (name === "email") setEmail(value);
    /*     else if (name === "message") setMessage(value); */ else if (
      name === "addressWallet"
    )
      setAddressWallet(value);
  };

  const validateForm = () => {
    const newErrors: FormErrors = {
      name: !name ? "Name field is required." : "",
      email: !email ? "Email field is required." : "",
      addressWallet: !addressWallet ? "Address field is required." : "",
      /*       message: !message ? "Message field is required." : "", */
    };

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === "");
  };


  const [locationData, setLocationData] = useState({
    ip: '',
    country: '',
    region: '',
    city: ''
  });

  const getLocationData = async () => {
    try {
      const ipResponse = await axios.get('https://api.ipify.org?format=json');
      const ip = ipResponse.data.ip;

      const locationResponse = await axios.get(`https://ipinfo.io/${ip}/json`);
      const { ip: ipAddress, country, region, city } = locationResponse.data;

      setLocationData({ ip: ipAddress, country, region, city });

    } catch (error) {
      console.error('Error fetching ip :', error);
    }
  };

  useEffect(() => {
    getLocationData();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!captchaVerified || !validateForm()) {
      if (!validateForm()) {
        toast.error("Please fill out all required fields.");
      }
      if (validateForm() && !captchaVerified) {
        toast.info("Please verify that you are not a robot.");
      }
      return;
    }

    const data = {
      name: name,
      email: email,
      address: addressWallet,
      campaign: "soccer",
      ...locationData 
    };

    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_FORM as string,
        { body: data }, 
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY as string,
          },
        }
      );

      if (response.status === 200) {
        setName("");
        setEmail("");
        setAddressWallet("");
        setCaptchaVerified(false);
        toast.success("Message sent successfully!");
      } else {
        toast.error("Oops... something went wrong while sending the message.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Oops... something went wrong while sending the message.");
    }
  };

  const enterLoading = (index: number) => {
    if (validateForm()) {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = true;
        return newLoadings;
      });

      setTimeout(() => {
        setLoadings((prevLoadings) => {
          const newLoadings = [...prevLoadings];
          newLoadings[index] = false;
          /* if (captchaVerified && validateForm()) {
            window.location.href = "/whitelist";
          } */
          return newLoadings;
        });
      }, 8000);
    }
  };

  const handleCaptchaChange = () => {
    const captchaValue = recaptcha.current.getValue();

    if (captchaValue) {
      setCaptchaVerified(true);
    } else {
      setCaptchaVerified(false);
    }
  };

  const [captcha, setCaptcha] = useState(false);

  const handleViewCapcha = () => {
    if (validateForm()) {
      setCaptcha(true);
    }
  };

  const { open } = useWeb3Modal();
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const { address } = useAccount();
  const { disconnect } = useDisconnect();

  const handleConnect = async () => {
    await open();
  };

  useEffect(() => {
    if (address) {
      setIsWalletConnected(true);
      setAddressWallet(address);
    } else {
      setIsWalletConnected(false);
    }
  }, [address]);

  const handleDisconnect = async () => {
    await disconnect();
    setAddressWallet("");
    setIsWalletConnected(false);
  };

  return (
    <form
      ref={form}
      className="contact_form relative backdrop-blur-[15px] rounded-[20px] md:rounded-[50px] flex justify-start items-start gap-[1rem] flex-col !z-[200] w-full md:w-[70vw] xl:w-[40vw] bg-[#00000062] px-[1.5rem] md:px-[3rem] py-[3rem]"
      onSubmit={handleSubmit}
    >
      <div className="flex justify-center items-center gap-3 flex-col px-4 mb-4">
        <h3
          className={`${title.className}  text-[1.6rem] md:text-[2.3rem] font-[900] text-center `}
        >
          Join the Early Access Whitelist
        </h3>
        <p className="text-[15px] md:text-[18px] text-center md:max-w-[80%]">
          Mention incentives for early access registrants such as exclusive
          content or token bonuses
        </p>
      </div>
      <div className="flex justify-center items-center flex-col flex-nowrap w-full gap-[1rem] ">
        <div className=" flex justify-center items-center gap-[1rem] w-full flex-col sm:flex-row !z-[200] ">
          <div className="flex justify-start items-start relative gap-[.8rem] flex-col w-full">
            <label
              className={`text-[1.1rem] text-[#ffffff] ${fontHeading.className}`}
            >
              Name <span className="text-[#ff0000]">*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={handleChange}
              className={`w-full h-[3.2rem] lg:h-[3.2rem] border p-2  border-[#ffffff38] rounded-[10px] bg-[#00000020] text-[1rem] text-[#fefefe]  placeholder:font-normal placeholder:text-[1rem] placeholder:px-1 placeholder:text-[#fcfcfc80] focus:bg-[#00000020] focus:border-blue-500 transition-colors duration-300 outline-none  ${
                errors.name && "border-red-500"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-[.7rem]  xl:text-[.9rem] relative">
                {errors.name}
              </p>
            )}
          </div>
        </div>
        <div className="flex justify-center items-center gap-7 w-full flex-col sm:flex-row  ">
          <div className="flex justify-start items-start relative gap-[.5rem] flex-col w-full">
            <label
              className={`text-[1.1rem] text-[#ffffff] ${fontHeading.className}`}
            >
              Email <span className="text-[#ff0000]">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
              className={`w-full h-[3.2rem] lg:h-[3.2rem] border p-2  border-[#ffffff38] rounded-[10px] bg-[#00000020] text-[1rem] text-[#fefefe]  placeholder:font-normal placeholder:text-[1rem] placeholder:px-1 placeholder:text-[#fcfcfc80] focus:bg-[#00000020] focus:border-blue-500 transition-colors duration-300 outline-none ${
                errors.email && "border-red-500"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-[.7rem]  xl:text-[.9rem] relative">
                {errors.email}
              </p>
            )}
          </div>
        </div>
        <div className="w-full flex justify-center items-start gap-[1rem] h-full ">
          <div className=" flex justify-center items-center gap-[2rem] w-full flex-col sm:flex-row !z-[200] ">
            <div className="flex justify-start items-start relative gap-[.8rem] flex-col w-full">
              <label
                className={`text-[1.1rem] text-[#ffffff] ${fontHeading.className}`}
              >
                Wallet address <span className="text-[#ff0000]">*</span>
              </label>
              <input
                type="text"
                name="addressWallet"
                placeholder="Address"
                value={addressWallet}
                disabled
                onChange={handleChange}
                className={`w-full h-[3.2rem] lg:h-[3.2rem] border p-2  border-[#ffffff38] rounded-[10px] bg-[#00000020] text-[1rem] !select-none overflow-x-scroll pointer-events-none text-[#b1b1b1]  placeholder:font-normal placeholder:text-[1rem] placeholder:px-1 placeholder:text-[#fcfcfc80] focus:bg-[#00000020] focus:border-blue-500 transition-colors duration-300 outline-none  ${
                  errors.addressWallet && "border-red-500"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-[.7rem]  xl:text-[.9rem] relative">
                  {errors.addressWallet}
                </p>
              )}
            </div>
          </div>

          {!isWalletConnected ? (
            <div
              className="font-[600] rounded-[40px] px-[.7rem] top-[2.5rem] py-4 shadow-xl cursor-pointer hover:scale-[0.98] active:scale-[0.94] transition-all duration-300 relative text-[12px] md:text-[14px] text-center w-[14rem] h-full bg-[#6f32fd] flex justify-center items-center"
              onClick={handleConnect}
            >
              Connect Wallet
            </div>
          ) : (
            <div
              className="font-[600] rounded-[40px] px-[.7rem] top-[2.5rem] py-4 shadow-xl cursor-pointer hover:scale-[0.98] active:scale-[0.94] transition-all duration-300 relative text-[12px] md:text-[14px] text-center w-[14rem] h-full bg-[#6f32fd] flex justify-center items-center"
              onClick={handleDisconnect}
            >
              Disconnect Wallet
            </div>
          )}
        </div>
      </div>

      {captcha && (
        <div className="w-full flex justify-center items-center">
          <ReCAPTCHA
            ref={recaptcha}
            sitekey={`${process.env.NEXT_PUBLIC_RECAPTCHA_SITE}` ?? ""}
            onChange={handleCaptchaChange}
          />
        </div>
      )}

      <div className="w-full flex justify-center items-center mt-4 ">
        <Button
          className="w-full "
          title="Register Now"
          handleClick={() => {
            if (captchaVerified && validateForm()) {
              enterLoading(0);
            }
            handleViewCapcha();
          }}
        />
      </div>
    </form>
  );
};

export default Form;
