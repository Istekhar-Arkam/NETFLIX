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
          <div className="absolute w-full max-w-lg mt-10 bg-black rounded-lg opacity-65 top-20 h-4/6">
            <h1 className="mt-10 ml-8 text-3xl font-semibold sm:ml-24">
              Sign Up
            </h1>

            <div className="flex justify-between">
              <div className="flex mt-3 sm:ml-16">
                <input type="checkbox" className="ml-8 " />
                <p className="ml-1">Remember Me</p>
              </div>
              <p className="mt-3 mr-6 sm:mr-24">Need help ?</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
