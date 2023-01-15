import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import dropdown from "../assets/images/dropdown.png";
import { useOutsideClick } from '../hooks/useOutSideClick';
import { removeUser } from '../redux/slices/userSlice';

const Header = ({screenTitle}) => {
    const [logoutBox, setLogoutBox] = useState(true);
    const user = useSelector((state) => state?.user?.user);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogoutToggle = () => {
      setLogoutBox(!logoutBox);
    };

    const closeLogoutBox = () => {
      setLogoutBox(true)
    }

    const ref = useOutsideClick(closeLogoutBox);

    const signOut = () => {
        dispatch(removeUser());
        navigate("/");
      };

    return (
        <div className="h-18 w-full px-[4%] bg-white flex justify-between items-center py-4 border-[1px] border-[#f0f0f0]">
        <h1 className="font-bold">{screenTitle}</h1>
        <div className="flex items-center" ref={ref}  onClick={handleLogoutToggle}>
          <p className="font-[500] cursor-pointer" alt="">{user?.first_name} {user?.last_name}</p>
          <div className="ml-2 relative cursor-pointer">
            <img src={dropdown}  />
            <div
              className={
                logoutBox
                  ? "hidden"
                  : "cursor-pointer absolute  right-2 w-[95px]  z-10  rounded-[4px] h-[40px]  bg-white py-6 mb-2 text-xs text-black ease-in duration-500"
              }
              id="logout-box"
            >
              <p className="text-center text-danger font-[500] text-[16px]" onClick={signOut}>
                Log out
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Header;