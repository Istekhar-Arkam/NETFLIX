import logo from "../assets/logo.png";
import background_banner from "../assets/background_banner.jpg";
import { useState } from "react";
import { login, signup } from ".././firebase";

const Login = () => {
  const [signState, setSignState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user_auth = async (event) => {
    event.preventDefault();
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
  };

  return (
    <>
      <div className="relative">
        <img
          src={background_banner}
          alt="background_banner"
          className="w-full h-screen"
        />
        <div className="absolute top-0 mt-4 ml-8 max-w-36 sm:max-w-48 sm:ml-16">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex items-center justify-center">
          <div className="absolute flex justify-center w-full h-auto max-w-md p-3 mt-8 bg-black rounded-lg opacity-90 top-20">
            <div className="max-w-xs ">
              <h1 className="mb-5 ml-1 text-3xl font-semibold capitalize mt-7 sm:mb-7">
                {signState}
              </h1>
              <form>
                {signState === "Sign Up" ? (
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="enter your name"
                    className="w-full p-3 mb-6 capitalize bg-[#343434] rounded-md opacity-100"
                  />
                ) : null}

                <input
                  type="text"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="email"
                  className="w-full p-3 mb-6  bg-[#343434] rounded-md opacity-100"
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="w-full p-3 mb-6 bg-[#343434] rounded-md opacity-100"
                  placeholder="password"
                />

                <button
                  onClick={user_auth}
                  type="submit"
                  className="w-full p-2 capitalize bg-red-600 rounded-md opacity-100 hover:bg-red-500"
                >
                  {signState}
                </button>
                <div className="flex justify-between sm:mt-4 ">
                  <div className="flex mt-3 mb-6 sm:mb-10">
                    <input type="checkbox" />
                    <p className="ml-1 cursor-pointer">Remember Me</p>
                  </div>
                  <div>
                    <p className="mt-3 cursor-pointer">Need help ?</p>
                  </div>
                </div>
              </form>
              <div className="">
                {signState === "Sign In" ? (
                  <p className="pb-6 text-center text-gray-500 capitalize cursor-pointer sm:pb-8">
                    new to netflix?{" "}
                    <span
                      className="ml-4 font-bold text-white"
                      onClick={() => setSignState("sign up")}
                    >
                      sign up now
                    </span>
                  </p>
                ) : (
                  <p className="mb-6 text-center text-gray-500 capitalize cursor-pointer">
                    already have account?{" "}
                    <span
                      className="ml-4 font-bold text-white"
                      onClick={() => setSignState("sign in")}
                    >
                      sign in now
                    </span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
