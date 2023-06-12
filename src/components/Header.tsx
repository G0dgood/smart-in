import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Nav } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { TfiAlignJustify } from "react-icons/tfi";
// import logo from "../assets/images/ASLLOGO.svg";
import { AiOutlineLogout } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";
// import LogoutOption from "./LogoutOption";
// import Notification from "./Notification/Notification";



import { callback } from "chart.js/dist/helpers/helpers.core";


const Header = ({ toggleSideNav }: any) => {
  // const userInfo = dataService.getData(`${process.env.REACT_APP_ERP_USER_INFO}`)
  // const dispatch = useAppDispatch();
  const [refresh, setRefresh] = useState<any>(false);
  const [network, setnetwork] = useState<any>();
  const [dropDown, setDropDown] = useState(false);
  const [dropDownNoti, setDropDownNoti] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<any>();



  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);








  window.addEventListener("offline", (e) => setnetwork("offline"));
  window.addEventListener("online", (e) => setnetwork("online"));
  useEffect(() => {
    if (network === "online") {
      toast.success("You are back online!");
    } else if (network === "offline") {
      toast.error("You have lost internet connection!");
    }
  }, [network]);

  const [isOpen, setIsopen] = useState(false);
  // const [data, setData] = useState(false);
  const [showLogout, setShowLogout] = useState<any>(false);


  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  const handleNoti = () => {
    if (!dropDownNoti) {
      setDropDownNoti(true)
    } else {
      setDropDownNoti(false)
    }
  }






  return (
    <div id="header" onMouseLeave={() => setDropDown(false)} >
      {/* <Socket setRefresh={setRefresh} /> */}
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 15000,
          // error: {
          //   duration: 20000,
          // }
        }}
      />

      <div className="header-container">
        <div className="header-left">

          {width >= 799 ?
            <TfiAlignJustify
              className="mobileSidebarbtn"
              size={25}
              onClick={toggleSideNav}
            /> : <TfiAlignJustify
              className="mobileSidebarbtntwo"
              size={25}
              onClick={ToggleSidebar}
            />}



          <div className="header-logo">
            {/* <img src={logo} alt="ASL" /> */}
          </div>
          <span className="header-logo-text">{/* Line Manager */}</span>
          <span className="header-logo-text1">
            {"Johndoe.go@gmail.com"}
          </span>
        </div>
        <div className="hand-noficational-place">

          <div className="hand-noficational-place-sup" >
            <div className="Messages-button" onClick={handleNoti}>
              <span className="content">
                <IoIosNotifications size={30} />
              </span>
              <span className="badge">{notification?.new_notification_count}</span>
            </div>
            {dropDownNoti &&
              (<div className="user-details-noti">
                {/* <Notification handleNext={handleNext} handlePrev={handlePrev} notification={notification} loading={loading} /> */}
              </div>)}
          </div>

          <div
            className="d-flex header-user-details"
            // onClick={() => setDropDown(!dropDown)}
            onClick={() => setDropDown(true)}
          >
            <span className="dropdown-names">
              {/* {userInfo?.employee?.full_name} */}
            </span>
            <div className="preview-header img-container-header">
              <FaUserCircle size={22} />
            </div>

            {dropDown && (
              <div className="dropdown">
                <Nav className="flex-column">
                  <NavLink to="/profile" className="drop-user-settings">
                    <CgProfile size={20} className="dropdown-icons-tools" />
                    Profile
                  </NavLink>
                  <NavLink
                    to=""
                    className="drop-logout"
                    onClick={() => setShowLogout(true)}
                  >
                    <AiOutlineLogout size={20} className="dropdown-icons-tools" />
                    Logout
                  </NavLink>
                </Nav>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <LogoutOption showLogout={showLogout} setShowLogout={setShowLogout} />
      <MobileSideBar
        ToggleSidebar={ToggleSidebar}
        isOpen={isOpen}
      // setHideNav={setHideNav}
      /> */}
    </div>
  );
};

export default Header;
