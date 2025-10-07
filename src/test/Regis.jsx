import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';

function Regis() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
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
            const response = await axios.post("http://localhost:5001/menu", formData);
            console.log('Register success:', response.data);


            await Swal.fire({
                title: "Pendaftaran Berhasil!",
                text: "Akun kamu berhasil dibuat.",
                icon: "success",
                confirmButtonText: "OK"
            });


            navigate("/Y");
        } catch (error) {
            console.error('Error register:', error);

            Swal.fire({
                title: "gagal",
                text: "Terjadi kesalahan saat mengirim data.",
                icon: "error",
                confirmButtonText: "OK"
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex item-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-100 h-110 max-w-sm mt-30">
                <h1 className="text-2xl font-bold text-center mb-6">Test</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4 mt-10">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input
                            className="shadow border rounded w-full py-2 px-3 text-gray-700"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Masukkan teks"
                            required
                        />
                    </div>
                    <div className="mb-6 mt-10 ">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input
                            className="shadow border rounded w-full py-2 px-3 text-gray-700"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Masukkan teks"
                            required
                        />
                    </div>
                    <div className="flex justify-between mt-20">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-7 rounded"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? "Mengirim..." : "KIRIM"}
                        </button>
                        <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-7 rounded"
                            type="button"
                            onClick={() => navigate("/h")}>
                            Kembali
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Regis;
