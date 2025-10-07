import React, { useState, useEffect } from 'react';
import Kaireng from "../assets/image/Kaireng.jpg";
import Binusa from "../assets/image/Binusa.jpg";
import { Link } from 'react-router-dom';

const Yatta = () => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);


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
          <div className="">
            <div className="logo">
              <a
                href="#"
                className="bg-sky-400 px-5 py-2 rounded-full text-white font-bold hover:bg-sky-500 transition-all">
                Tentang Sekolah
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <ul className={`
              flex lg:gap-12 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full md:translate-y-0
              md:text-black md:p-0 md:m-0 md:transition-none gap-8 fixed ${menuActive} top-1/2 translate-y-1/2 flex-col 
              px-8 py-6 rounded shadow-lg shadow-slate-300 bg-sky-400 font-bold text-white transition-all`}>
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
                <a href="#" className="font-medium opacity-75">Jurusan</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="hero grid md:grid-cols-2 items-center gap-20 pt-32">
          <div className="box">
            <div className="ml-100">

              <h1 className="ml-35 lg:text-5xl font-medium">
                SMK {" "}
              </h1>
              <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
                BINANUSANTARA{" "}
              </h1>
            </div>
            <div className="ml-90 mt-20 border-2 p-3 mx-auto w-[500px] h-auto self-start">
              <img src={Binusa} alt="Binusa" className="w-full h-auto object-contain" />
              <div className="text-2xl text-center font-bold mt-2">egv</div>
              <h1 className="border p-5 mt-3">
                penerimaan baca selengkapn... Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam nobis
                accusantium quasi necessitatibus ab illo totam saepe corporis dolorem unde eligendi deserunt veritatis
                animi earum voluptate pariatur vel, sequi aliquid magnam iure veniam provident! Omnis reiciendis dolore
                magnam voluptates!
              </h1>
              <div className="p-2 text-center">
                <button>
                  <Link to="/R">
                    <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded">
                      <a>
                        Daftar Sekarang
                      </a>
                    </div>
                  </Link>
                </button>
              </div>
            </div>
            <div className="w-320 border-2 mt-10 p-9">
              <div className="text-center">
                <span className="font-bold text-5xl ">
                  jurusan
                </span>
              </div>
              <div className="services box pt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-10">
                <div className="bg-white p-5 rounded-lg shadow-md w-80 h-90 max-w-sm">
                  <p className="font-bold mb-7 text-3xl">
                    tkej
                  </p>
                  <p className="text-base/8 mb-7 p-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae asperiores
                    architecto obcaecati, voluptatem nulla delectus harum iure libero ut ab.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-md w-80 h-90 max-w-sm">
                  <p className="font-bold mb-7 text-3xl">
                    tkej
                  </p>
                  <p className="text-base/8 mb-7 p-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae asperiores
                    architecto obcaecati, voluptatem nulla delectus harum iure libero ut ab.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-md w-80 h-90 max-w-sm">
                  <p className="font-bold mb-7 text-3xl">
                    tkej
                  </p>
                  <p className="text-base/8 mb-7 p-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae asperiores
                    architecto obcaecati, voluptatem nulla delectus harum iure libero ut ab.
                  </p>
                </div>
                <div className="bg-white md:col-start-2 p-5 rounded-lg shadow-md w-80 h-90 max-w-sm">
                  <p className="font-bold mb-7 text-3xl">
                    tkej
                  </p>
                  <p className="text-base/8 mb-7 p-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae asperiores
                    architecto obcaecati, voluptatem nulla delectus harum iure libero ut ab.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yatta;

















































































































































































































































































































































































































































































