import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import { Users } from "../pages/Users";
import { Bookings } from "../pages/Bookings";
import { Cabins } from "../pages/Cabins";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Signup } from "../pages/Signup";

export default function AppRouters() {
    return (
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
