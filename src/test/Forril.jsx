import { useNavigate } from "react-router-dom";
import Dasbor from "./Dasbor";


function Forril () {
  const navigate = useNavigate();

  return (
    <>
      <Dasbor />
      <div className="ml-80 h-250 w-200 mt-15 p-10">
      
        <div className="text-cyan-800 bg-white shadow-lg p-3 mt-0 ">
          <img
            className="w-50 h-50 rounded-full mx-auto border-3 border-sky-300 shadow-md"
            src="https://th.bing.com/th/id/OIP.gd0r7Bzhxm5QVZZs6P67_gHaEb?w=227&h=180&c=7&r=0&o=7&cb=12&pid=1.7&rm=3"
            alt=""
          />
            <h1 className="text-center text-3xl text-black font-bold mb-3">propil</h1>
        

        <div className=" shadow-lg p-3 font-semibold">
          <div className=" text-black font-bold ">

            <h2 className="text-2xl p-5">hyy</h2>
            <h2 className="text-2xl p-5">sheyrzz</h2>
            <h2 className="h-10 text-center text-xl">dyyzn</h2>
          </div>
          <div className="flex justify-center">
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Forril;