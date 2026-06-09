import React, { useState } from "react";
import type { RegisterPayload } from "../type/authen/auth.type";
import { registerApi } from "../services/auth.api";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";

export const Signup = () => {
  const navigate = useNavigate()

    const [formSignUp, setFormSignUp] = useState<RegisterPayload>({
        fullName: "",
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        setFormSignUp({
            ...formSignUp,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await registerApi(formSignUp)
            console.log(res, 'res')
            if(res.status === 200){
              navigate('/login')
            }
        } catch (error) {
            console.log(error);
            toast.error('Having an error!');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold text-center mb-6">Đăng ký</h2>

                <form>
                    {/* Fullname */}
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">
                            Tên người dùng
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Nhập tên người dùng"
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Nhập email"
                            onChange={handleChange}
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2">
                            Mật khẩu
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Nhập mật khẩu"
                            onChange={handleChange}
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                        {loading ? "...Đang tải" : "Đăng ký"}
                    </button>
                </form>

                <p className="text-center mt-6 text-gray-600">
                    Đã có tài khoản?{" "}
                    <Link to="/login" className="text-blue-600 hover:underline">
                        Đăng nhập
                    </Link>
                </p>
            </div>
        </div>
    );
};
