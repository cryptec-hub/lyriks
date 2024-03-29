import Loader from "./Loader";

const Error = () => (
  <div className="w-full justify-center items center flex-col place-items-center">
    <Loader title="Just a second..." className="w-32 h-32 object-contain" />
    {/* <img src={Loader} alt="Loader" className="w-32 h-32 object-contain" /> */}
    {/* <h1 className="font-bold text-2xl text-white mt-2">
      Something went wrong. Please try again.
    </h1> */}
  </div>
);

export default Error;
