import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';


function EditYatta() {
    const [formData, setFormData] = useState({
        nama: "",
        sekolah: "",
        nik: "",
        jurusan: "",
        nilai: "",
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {

            const response = await axios.post("http://localhost:5001/slek", formData);
            console.log("Respon server:", response.data);
            setFormData({
                nama: "",
                sekolah: "",
                nik: "",
                jurusan: "",
                nilai: "",
            });
            Swal.fire({
                title: "Berhasil!",
                text: "Data berhasil ditambahkan!",
                icon: "success",
                confirmButtonText: "OK"
            }).then(() => {

                navigate("/V");
            });

        } catch (error) {
            console.error("Error saat menambahkan data:", error);
            Swal.fire({
                title: "Gagal!",
                text: "Gagal menambahkan data!",
                icon: "error",
                confirmButtonText: "OK"
            });
        } finally {
            setLoading(false);
        }
    };
    const handleKembali = () => {
        navigate("/V");
    };


    return (

        <div className="flex justify-center items-center min-h-screen ">
            
            <form
                onSubmit={handleSubmit}
                className="bg-white  p-12 rounded-md shadow-md w-96"
            >
                <div className="bg-white">
                    <h2 className="text-center font-bold mb-4 text-lg">Tambah Teks</h2>
                    <label className="block mb-2 font-semibold" htmlFor="nama">
                        nama
                    </label>
                    <input
                        id="nama"
                        name="nama"
                        type="text"
                        placeholder="masukan teks"
                        value={formData.nama}
                        onChange={handleChange}
                        className="border border-gray-800 rounded px-3 py-2 mb-4 w-full"
                        required
                    />
                    <label className="block mb-2 font-semibold" htmlFor="sekolah">
                        asal sekolah
                    </label>
                    <input
                        id="sekolah"
                        name="sekolah"
                        type="text"
                        placeholder="masukan teks"
                        value={formData.sekolah}
                        onChange={handleChange}
                        className="border border-gray-800 rounded px-3 py-2 mb-4 w-full"
                        required
                    />
                    <label className="block mb-2 font-semibold" htmlFor="nik">
                        nik
                    </label>
                    <input
                        id="nik"
                        name="nik"
                        type="text"
                        placeholder="masukan teks"
                        value={formData.nik}
                        onChange={handleChange}
                        className="border border-gray-800 rounded px-3 py-2 mb-4 w-full"
                        required
                    />
                    <label htmlFor="jurusan" className="block text-gray-700 text-sm font-bold mb-2">
                        jurusan
                    </label>
                    <input
                        id="jurusan"
                        type="text"
                        name="jurusan"
                        value={formData.jurusan}
                        onChange={handleChange}
                        placeholder="Masukkan jurusan"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                    <label htmlFor="nilai" className="block text-gray-700 text-sm font-bold mb-2">
                        nilai
                    </label>
                    <input
                        id="nilai"
                        type="text"
                        name="nilai"
                        value={formData.nilai}
                        onChange={handleChange}
                        placeholder="Masukkan nilai"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                    <div className="flex justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-10"
                        >
                            Simpan
                        </button>

                        <button
                            type="submit"
                            onClick={handleKembali}
                            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 mt-10"
                        >
                            Kembali
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditYatta;
