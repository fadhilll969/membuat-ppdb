import { useState } from "react"

function Dasbor() {
    const [open, setOpen] = useState(false);
    return (
        <div className="">
            <div className={`fixed top-0 h-full w-60 bg-sky-600 bg-indigo-600 text-white
            ${open ? "translate-0" : "-translate-x-full"}
            transition-transform duration-300 ease-in-out md:translate-x-0`}>
                <div className="text-4xl font-bold mb-8 text-center">Dashboard</div>
                <nav className="space-y-3">
                    <div className="">

                        <a href="/" className="block py-4 px-3 rounded hover:bg-blue-600 border">Total</a>
                        <a href="/V" className="block py-4 px-3 rounded hover:bg-blue-600 border">Tabel Siswa</a>
                        <a href="/K" className="block py-4 px-3 rounded hover:bg-blue-600 border">Pendaftar</a>
                    </div>
                    <a href="/h" className="mt-80 block py-2 px-3 rounded hover:bg-blue-600 border">Logout</a>
                </nav>
            </div>
        </div>

    )
}


export default Dasbor;