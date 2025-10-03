import React, { useState, useEffect } from 'react';
import Kaireng from "../assets/image/Kaireng.jpg";
import Binusa from "../assets/image/Binusa.jpg";

const Yatta = () => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  let menuActive = show ? "left-0" : "-left-full";
  let scrollActive = scroll ? "py-6 bg-white shadow" : "py-4";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setScroll(true);
        setShow(false);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

     
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-center">
      <div className={`navbar fixed w-full transition-all ${scrollActive}`}>
        <div className="container mx-auto px-4">
          <div className="navbar-box flex items-center justify-between">
            <div className="logo"></div>
            <h1 className="text-2xl             font-bold">Mbud</h1>

            <ul className={`flex lg:gap-12 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full md:translate-y-0 
              md:text-black md:p-0 md:m-0 md:transition-none gap-8 fixed ${menuActive} top-1/2 -translate-y-1/2 flex-col px-8 py-6 rounded 
              shadow-lg shadow-slate-300 bg-sky-400 font-bold text-white transition-all`}>
              <li className="flex items-center gap-3">
                <i className="ri-home-2-line text-3xl md:hidden block"></i>
                <a href="#" className="font-medium opacity-75">Beranda</a>
              </li>
              <li className="flex items-center gap-3">
                <i className="ri-information-line text-3xl md:hidden block"></i>
                <a href="#" className="font-medium opacity-75">Tentang Kami</a>
              </li>
              <li className="flex items-center gap-3">
                <i className="ri-settings-3-line text-3xl md:hidden block"></i>
                <a href="#" className="font-medium opacity-75">Layanan</a>
              </li>
              <li className="flex items-center gap-3">
                <i className="ri-image-2-line text-3xl md:hidden block"></i>
                <a href="#" className="font-medium opacity-75">Proyek</a>
              </li>
            </ul>

            <div className="social flex items-center gap-2"></div>
            <a
              href="#"
              className="bg-sky-400 px-5 py-2 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
            >
              Social Media
            </a>

            <i className="ri-menu-3-line text-3xl md:hidden block" onClick={handleClick}></i>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="hero grid md:grid-cols-2 items-center gap-20 pt-32">
          <div className="box">
            <h1 className="lg:text-5xl/tight text-center text-3xl font-medium mb-7">
              Smk BINANUSANTARA{" "}
            </h1>

            <div className="border mt-10 p-5">
              <span className="font-bold text-5xl text-sky-400 underline">jurusan</span>
              <div className="mt-10">
             
                  <div >
                    <p className="text-bold mb-7 text-3xl">jj</p>
                    <p className="text-base/8 border mb-7 p-5">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae asperiores
                      architecto obcaecati, voluptatem nulla delectus harum iure libero ut ab.
                    </p>
                  </div>
                  <div >
                    <p className="text-bold mb-7 text-3xl">jj</p>
                    <p className="text-base/8 border mb-7 p-5">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae asperiores
                      architecto obcaecati, voluptatem nulla delectus harum iure libero ut ab.
                    </p>
                  </div>
                  <div >
                    <p className="text-bold mb-7 text-3xl">jj</p>
                    <p className="text-base/8 border mb-7 p-5">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae asperiores
                      architecto obcaecati, voluptatem nulla delectus harum iure libero ut ab.
                    </p>
                  </div>
                  <div >
                    <p className="text-bold mb-7 text-3xl">jj</p>
                    <p className="text-base/8 border mb-7 p-5">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae asperiores
                      architecto obcaecati, voluptatem nulla delectus harum iure libero ut ab.
                    </p>
                  </div>
                
              </div>
            </div>
          </div>

          <div className="mx-auto w-[400px] h-auto self-start">
            <img src={Binusa} alt="Binusa" className="w-full h-auto object-contain" />
          </div>

          <div className="flex justify-end ml-50">
            <a
              href="#"
              className="bg-sky-400 hover:bg-sky-500 transition-all py-2 px-4 text-white shadow rounded-full"
            >
              hai syahshohobrBacaselengk...
              <i className="ri-eye-line ms-1"></i>{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yatta;
