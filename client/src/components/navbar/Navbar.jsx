// import "./navBar.scss";
// import { Link } from "react-router-dom";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
// import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
// import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
// import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// // import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import { useContext } from "react";
// import { DarkModeContext } from "../../context/darkModeContext";
// import { AuthContext } from "../../context/authContext";

// const Navbar = () => {
//   const { toggle, darkMode } = useContext(DarkModeContext);
//   const { currentUser, logout } = useContext(AuthContext);

//   const handleLogout = () => {
//     logout();
//   };

//   return (
//     <div className="navbar">
//       <div className="left">
//         <Link to="/" style={{ textDecoration: "none" }}>
//           <span>CodeConnect</span>
//         </Link>
//         <Link to="/" style={{ textDecoration: "none" }}>
//           <span className="home-icon">
//             <HomeOutlinedIcon />
//           </span>
//         </Link>
//         {darkMode ? (
//           <WbSunnyOutlinedIcon onClick={toggle} />
//         ) : (
//           <DarkModeOutlinedIcon onClick={toggle} />
//         )}
//         <GridViewOutlinedIcon />
//         <div className="search">
//           <SearchOutlinedIcon />
//           <input type="text" placeholder="Search..." />
//         </div>
//       </div>
//       <div className="right">
//         <PersonOutlinedIcon />
//         <EmailOutlinedIcon />
//         <NotificationsOutlinedIcon />
//         {currentUser ? (
//           <div className="user">
//             <Link to={`/profile/${currentUser.id}`} className="profile-link">
//               <img
//                 src={`/upload/${currentUser.profilePic}`}
//                 alt="Profile"
//                 className="profile-img"
//               />
//             </Link>
//             <span>{currentUser.name}</span>
//             <ExitToAppIcon onClick={handleLogout} className="logout-icon" />
//           </div>
//         ) : (
//           <Link to="/login">
//             <button>Login</button>
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./navBar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser, logout } = useContext(AuthContext);
  const [searchQuery, setSearchQuery] = useState("");

  const handleLogout = () => {
    logout();
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8800/api/search/search?query=${encodeURIComponent(
          searchQuery
        )}`
      );

      const user = response.data; // Assuming the response returns user information as described
      if (user && user.id) {
        setSearchQuery(""); // Clear the search query/input
        navigate(`/profile/${user.id}`); // Navigate to the profile page of the user found by name
      } else {
        console.log("User not found");
      }
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>CodeConnect</span>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="home-icon">
            <HomeOutlinedIcon />
          </span>
        </Link>
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )}
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon onClick={handleSearch} />
          <input
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        {currentUser ? (
          <div className="user">
            <Link to={`/profile/${currentUser.id}`} className="profile-link">
              {currentUser.profilePic ? (
                <img
                  src={`/upload/${currentUser.profilePic}`}
                  alt="Profile"
                  className="profile-img"
                />
              ) : (
                <AccountCircleIcon style={{ fontSize: 40 }} />
              )}
            </Link>
            <span>{currentUser.username}</span>
            <ExitToAppIcon onClick={handleLogout} className="logout-icon" />
          </div>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
