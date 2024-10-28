import logo from "../assets/logo.png";
import background_banner from "../assets/background_banner.jpg";

const Login = () => {
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
          <div className="absolute w-full h-auto max-w-lg p-3 mt-10 bg-black rounded-lg opacity-90 top-20">
            <h1 className="mb-5 ml-1 text-3xl font-semibold mt-7 sm:ml-24">
              Sign Up
            </h1>
            <input
              type="text"
              placeholder="enter your name"
              className="w-full p-3 mb-6 capitalize bg-gray-700 rounded-md"
            />
            <input
              type="email"
              placeholder="email"
              className="w-full p-3 mb-6 capitalize bg-gray-700 rounded-md"
            />
            <input
              type="password"
              className="w-full p-3 mb-6 capitalize bg-gray-700 rounded-md"
              placeholder="password"
            />

<button className="w-full p-2 capitalize bg-red-800 rounded-md hover:bg-red-600">sign up</button>
            <div className="flex justify-between">
              <div className="flex mt-3 mb-10 sm:ml-16">
                <input type="checkbox" className="ml-8 " />
                <p className="ml-1">Remember Me</p>
              </div>
              <p className="mt-3 mr-6 sm:mr-24">Need help ?</p>
            </div>
            <p className="mb-6 text-center text-gray-500 capitalize">already have account? <span className="font-bold text-white">sign in now</span></p>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Login;
