
export const Login = () => {
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
              placeholder="Nhập email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              placeholder="Nhập mật khẩu"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Đăng nhập
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          Chưa có tài khoản?{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline"
          >
            Đăng ký
          </a>
        </p>
      </div>
    </div>
  )
}
