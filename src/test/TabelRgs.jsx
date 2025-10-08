
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import Dasbor from "./Dasbor";

function TabelRegister() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:5001/menu");
                setData(res.data);
            } catch (err) {
                console.error("Gagal ambil data:", err);
            }
        };
        fetchData();
    }, []);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Apakah kamu yakin?",
            text: "Data yang dihapus tidak bisa dikembalikan!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ya, hapus!",
            cancelButtonText: "Batal😹😹"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete(`http://localhost:5001/menu/${id}`);
                    setData(data.filter(item => item.id !== id));

                    Swal.fire({
                        title: "Terhapus!",
                        text: "Data berhasil dihapus.",
                        icon: "success"
                    });
                } catch (error) {
                    console.error("Gagal menghapus data:", error);
                    Swal.fire({
                        title: "Gagal!",
                        text: "Terjadi kesalahan saat menghapus data.",
                        icon: "error"
                    });
                }
            }
        });
    };
    return (
        <>
        <Dasbor/>
        <div className="p-10 ml-70 mt-20">
            <h2 className="text-3xl p-5 text-center font-bold mb-5">Test</h2>
            <table className="border-collapse border border-gray-400 w-full">
                <thead>
                    <tr className="bg-sky-500">
                        <th className="border border-gray-400 px-4 py-2">no</th>
                        <th className="border border-gray-400 px-4 py-2">email</th>
                        <th className="border border-gray-400 px-4 py-2">password</th>
                        <th className="border border-gray-400 px-4 py-2">yatta</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={item.id} className="text-center">
                            <td className="border border-gray-400 px-4 py-2">{index + 1}</td>
                            <td className="border border-gray-400 px-4 py-2">{item.email}</td>
                            <td className="border border-gray-400 px-4 py-2">{item.password}</td>
                            <td className="border border-gray-400 px-4 py-2">
                                <button
                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 cursor-pointer"
                                    onClick={() => handleDelete(item.id)}
                                >
                                    Hapus
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-end mt-10">
                <Link
                    to="/Y"
                    className="inline-block bg-blue-500 text-white px-4 py-2 mb-5 rounded hover:bg-blue-600"
                >
                    backkte
                </Link>
            </div>
        </div>
                                    </>
    );
}

export default TabelRegister;
