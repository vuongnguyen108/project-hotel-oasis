import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import toast from "react-hot-toast";

export const Header = () => {
    const { token, user, setLogout} = useAuthStore();
    const navigate = useNavigate();
    const handleLogout = () => {
        toast.success('Logout success!')
        setLogout();
        navigate('/login')
    }
    return (
        <div className="flex justify-between h-20 items-center bg-white shadow ">
          <h2>Admin Panel</h2>
          <div>
                {token ? (
                    <>
                        <span className="mr-4">{user?.fullName}</span>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                ) : null}
          </div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
    );
};
