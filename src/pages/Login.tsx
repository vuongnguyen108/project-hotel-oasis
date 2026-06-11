import { Link, useNavigate } from "react-router-dom";
import type { LoginPayload } from "../type/authen/auth.type";
import { useState } from "react";
import { loginApi } from "../services/auth.api";
import toast from "react-hot-toast";
import { useAuthStore } from "../store/useAuthStore";

export const Login = () => {
    const { setLogin } = useAuthStore();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formLogin, setFormLogin] = useState<LoginPayload>({
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormLogin({
            ...formLogin,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formLogin, "formLogin");

        //Xóa khi API thành công
        toast.success("Đăng nhập thành công!");
        navigate("/");

        // try {
        //     setLoading(true);
        //     const res = await loginApi(formLogin);
        //     console.log(res, "resrse");
        //     const { access_token, user } = res;
        //     setLogin(user, access_token);
        //     toast.success("Đăng nhập thành công!");
        //     navigate("/");
        // } catch (error) {
        //     console.log(error);
        //     toast.error("Đăng nhập thất bại!");
        // } finally {
        //     setLoading(false);
        // }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold text-center mb-6">
                    Đăng nhập
                </h2>

                <form>
                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Nhập email"
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-2">
                        <label className="block text-gray-700 mb-2">
                            Mật khẩu
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Nhập mật khẩu"
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="text-right mb-6">
                        <a
                            href="#"
                            className="text-sm text-blue-600 hover:underline"
                        >
                            Quên mật khẩu?
                        </a>
                    </div>

                    <button
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                        disabled={loading}
                        onClick={handleSubmit}
                    >
                        {loading ? "Loading..." : "Đăng nhập"}
                    </button>
                </form>

                <p className="text-center mt-6 text-gray-600">
                    Chưa có tài khoản?{" "}
                    <Link
                        to="/signup"
                        className="text-blue-600 hover:underline"
                    >
                        Đăng ký
                    </Link>
                </p>
            </div>
        </div>
    );
};
