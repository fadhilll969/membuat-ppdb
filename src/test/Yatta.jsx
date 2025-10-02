import React from 'react'
import Kaireng from "../assets/image/Kaireng.jpg"
import Binusa from "../assets/image/Binusa.jpg"
const Yatta = () => {



    return (

        <div className="flex justify-center">

            <div className="container mx-auto px-4">
                <div className="hero grid md:grid-cols-2 items-center gap-20 pt-32">
                    <div className="box">
                        <h1
                            className="lg:text-5xl/tight text-3xl font-medium mb-7">
                            Smk BINANUSANTARA {""}
                              </h1>
                                <div className="border mt-10 p-5">
                            <span className="font-bold text-5xl text-sky-400 underline">
                                jurusan
                            </span>
                      
                      

                            <p className="text-bold mb-7 text-3xl">jj
                            </p>
                            <p className="text-base/8 border mb-7 p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae asperiores
                                architecto obcaecati, voluptatem nulla delectus harum iure libero ut ab.
                            </p>
                            <p className="text-bold mb-7 text-3xl">jj
                            </p>
                            <p className="text-base/8 border mb-7 p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae asperiores
                                architecto obcaecati, voluptatem nulla delectus harum iure libero ut ab.
                            </p>
                            <p className="text-bold mb-7 text-3xl">jj
                            </p>
                            <p className="text-base/8 border mb-7 p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae asperiores
                                architecto obcaecati, voluptatem nulla delectus harum iure libero ut ab.
                            </p>
                            <p className="text-bold mb-7 text-3xl">jj
                            </p>
                            <p className="text-base/8 border mb-7 p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae asperiores
                                architecto obcaecati, voluptatem nulla delectus harum iure libero ut ab.
                            </p>

                        </div>
                    </div>
                    <div className="mx-auto w-[500px] h-auto self-start">
                        <img src={Binusa} alt="Binusa" className="w-full h-auto object-contain" />
                    </div>
                    <div className="flex justify-end ml-50">

                        <a href="#" className="bg-sky-400 hover-:bg-sky-500 transition-all py-2 px-4 text-white shadow rounded-full">
                            hai syahshohobrBacaselengk...
                            <i className="ri-eye-line ms-1"></i>{" "}
                        </a>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Yatta
