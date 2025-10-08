import { useState } from "react"
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

function Dasbor() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate(); 

    const handleLogout = () => {
        Swal.fire({
            title: 'Yakin ingin logout?',
            text: "Kamu akan keluar dari halaman ini.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, Logout',
            cancelButtonText: 'Batal🤬👍🤞'
        }).then((result) => {
            if (result.isConfirmed) {
                navigate("/h"); 
            }
        })
    };

    return (
        <div className="">
            <div className={`fixed top-0 h-full w-60 bg-sky-600 bg-indigo-600 text-white
            ${open ? "translate-0" : "-translate-x-full"}
            transition-transform duration-300 ease-in-out md:translate-x-0`}>
                <div className="text-4xl font-bold mb-8 text-center">Dashboard</div>
                <nav className="space-y-3">
                    <div>
                        <a href="/M" className="block py-4 px-3 rounded hover:bg-blue-600 border">mbud</a>
                        <a href="/V" className="block py-4 px-3 rounded hover:bg-blue-600 border">Tabel Siswa</a>
                        <a href="/K" className="block py-4 px-3 rounded hover:bg-blue-600 border">Pendaftar</a>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="mt-80 block py-2 px-3 rounded hover:bg-blue-600 border w-full text-left"
                    >
                        Logout
                    </button>
                </nav>
            </div>
        </div>
    )
}

export default Dasbor;
