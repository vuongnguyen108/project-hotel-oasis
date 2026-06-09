import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <div className="flex justify-between p-4 ">
          <div>Header</div>
          <Link to='/login'>Logout</Link>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
    );
};
