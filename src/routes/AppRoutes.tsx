import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import { Users } from "../pages/Users";
import { Bookings } from "../pages/Bookings";
import { Cabins } from "../pages/Cabins";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Signup } from "../pages/Signup";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";

export default function AppRouters() {
    return (
        // Bản hoàn chỉnh
        
        // <BrowserRouter>
        //     <Routes>
        //         <Route path='/login' element={<PublicRoutes><Login /></PublicRoutes>}></Route>
        //         <Route path='/signup' element={<PublicRoutes><Signup /></PublicRoutes>}></Route>
        //         <Route path='/' element={<ProtectedRoutes><AdminLayout><Dashboard /></AdminLayout></ProtectedRoutes>}></Route>
        //         <Route path='/users' element={<ProtectedRoutes><AdminLayout><Users /></AdminLayout></ProtectedRoutes>}></Route>
        //         <Route path='/bookings' element={<ProtectedRoutes><AdminLayout><Bookings /></AdminLayout></ProtectedRoutes>}></Route>
        //         <Route path='/cabins' element={<ProtectedRoutes><AdminLayout><Cabins /></AdminLayout></ProtectedRoutes>}></Route>
        //     </Routes>
        // </BrowserRouter>

        // Bản test do lỗi API (chưa có public routes và protected routes)
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/signup' element={<Signup />}></Route>
                <Route path='/' element={<AdminLayout><Dashboard /></AdminLayout>}></Route>
                <Route path='/users' element={<AdminLayout><Users /></AdminLayout>}></Route>
                <Route path='/bookings' element={<AdminLayout><Bookings /></AdminLayout>}></Route>
                <Route path='/cabins' element={<AdminLayout><Cabins /></AdminLayout>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
