// import { useState } from "react";
// import { makeRequest } from "../../axios";
// import "./profile.scss";
// import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import PlaceIcon from "@mui/icons-material/Place";
// import LanguageIcon from "@mui/icons-material/Language";
// import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import Posts from "../../components/posts/Posts";
// import { useQuery, useQueryClient, useMutation } from "react-query";
// import { useLocation } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../../context/authContext";
// import Update from "../../components/update/Update";

// const Profile = () => {
//   const [openUpdate, setOpenUpdate] = useState(false);
//   const { currentUser } = useContext(AuthContext);
//   const userId = parseInt(useLocation().pathname.split("/")[2]);
//   const { isLoading, error, data } = useQuery(["user"], () =>
//     makeRequest.get("/users/find/" + userId).then((res) => {
//       return res.data;
//     })
//   );
//   const { isLoading: rIsLoading, data: relationshipData } = useQuery(
//     ["relationship"],
//     () =>
//       makeRequest.get("/relationships?followedUserId=" + userId).then((res) => {
//         return res.data;
//       })
//   );

//   const queryClient = useQueryClient();

//   const mutation = useMutation(
//     (following) => {
//       if (following)
//         return makeRequest.delete("/relationships?userId=" + userId);
//       return makeRequest.post("/relationships", { userId });
//     },
//     {
//       onSuccess: () => {
//         // Invalidate and refetch
//         queryClient.invalidateQueries(["relationship"]);
//       },
//     }
//   );

//   const handleFollow = () => {
//     mutation.mutate(relationshipData.includes(currentUser.id));
//   };

//   return (
//     <div className="profile">
//       {isLoading ? (
//         "loading"
//       ) : (
//         <>
//           <div className="images">
//             {/* Render cover and profile images */}
//             <img src={"/upload/" + data.coverPic} alt="" className="cover" />
//             <img
//               src={"/upload/" + data.profilePic}
//               alt=""
//               className="profilePic"
//             />
//           </div>
//           <div className="profileContainer">
//             <div className="uInfo">
//               <div className="left">
//                 <a href="http://facebook.com">
//                   <FacebookTwoToneIcon fontSize="large" />
//                 </a>
//                 <a href="https://www.instagram.com/">
//                   <InstagramIcon fontSize="large" />
//                 </a>
//                 <a href="https://twitter.com/">
//                   <TwitterIcon fontSize="large" />
//                 </a>
//                 <a href="https://www.linkedin.com/">
//                   <LinkedInIcon fontSize="large" />
//                 </a>
//               </div>
//               <div className="center">
//                 <span>{data.name}</span>
//                 <div className="info">
//                   <div className="item">
//                     <PlaceIcon />
//                     <span>{data.city}</span>
//                   </div>
//                   <div className="item">
//                     <LanguageIcon />
//                     <span>{data.website}</span>
//                   </div>
//                 </div>
//                 {rIsLoading ? (
//                   "loading"
//                 ) : userId === currentUser.id ? (
//                   <button onClick={() => setOpenUpdate(true)}>update</button>
//                 ) : (
//                   <button onClick={handleFollow}>
//                     {relationshipData.includes(currentUser.id)
//                       ? "Following"
//                       : "Follow"}
//                   </button>
//                 )}
//               </div>
//               <div className="right">
//                 <EmailOutlinedIcon />
//                 <MoreVertIcon />
//               </div>
//             </div>
//             <Posts userId={userId} />
//           </div>
//         </>
//       )}
//       {/* Pass `data` and `setOpenUpdate` to the Update component */}
//       {openUpdate && <Update setOpenUpdate={setOpenUpdate} user={data} />}
//     </div>
//   );
// };

// export default Profile;
import React, { useState, useContext, useEffect } from "react";
import { useQuery, useQueryClient, useMutation } from "react-query";
import { useLocation } from "react-router-dom";
import { makeRequest } from "../../axios";
import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts";
import Update from "../../components/update/Update";
import { AuthContext } from "../../context/authContext";

const Profile = () => {
  const [openUpdate, setOpenUpdate] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const location = useLocation();
  const userId = parseInt(location.pathname.split("/")[2]);

  // Effect to reset certain states when the userId changes
  useEffect(() => {
    setOpenUpdate(false); // Close the update modal if it's open
  }, [userId]);

  const { isLoading, error, data } = useQuery(["user", userId], () =>
    makeRequest.get("/users/find/" + userId).then((res) => {
      return res.data;
    })
  );

  const { isLoading: rIsLoading, data: relationshipData } = useQuery(
    ["relationship", userId],
    () =>
      makeRequest.get("/relationships?followedUserId=" + userId).then((res) => {
        return res.data;
      })
  );

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (following) => {
      if (following)
        return makeRequest.delete("/relationships?userId=" + userId);
      return makeRequest.post("/relationships", { userId });
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["relationship", userId]);
      },
    }
  );

  const handleFollow = () => {
    mutation.mutate(relationshipData.includes(currentUser.id));
  };

  return (
    <div className="profile">
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <div className="images">
            <img src={`/upload/${data.coverPic}`} alt="" className="cover" />
            <img
              src={`/upload/${data.profilePic}`}
              alt=""
              className="profilePic"
            />
          </div>
          <div className="profileContainer">
            <div className="uInfo">
              <div className="left">
                {/* Social Icons */}
                <a href={`http://facebook.com/${data.facebook}`}>
                  <FacebookTwoToneIcon fontSize="large" />
                </a>
                <a href={`https://www.instagram.com/${data.instagram}`}>
                  <InstagramIcon fontSize="large" />
                </a>
                <a href={`https://twitter.com/${data.twitter}`}>
                  <TwitterIcon fontSize="large" />
                </a>
                <a href={`https://www.linkedin.com/in/${data.linkedin}`}>
                  <LinkedInIcon fontSize="large" />
                </a>
              </div>
              <div className="center">
                <span>{data.name}</span>
                <div className="info">
                  <div className="item">
                    <PlaceIcon />
                    <span>{data.city}</span>
                  </div>
                  <div className="item">
                    <LanguageIcon />
                    <span>{data.website}</span>
                  </div>
                </div>
                {rIsLoading ? (
                  "Loading..."
                ) : userId === currentUser.id ? (
                  <button onClick={() => setOpenUpdate(true)}>Update</button>
                ) : (
                  <button onClick={handleFollow}>
                    {relationshipData.includes(currentUser.id)
                      ? "Following"
                      : "Follow"}
                  </button>
                )}
              </div>
              <div className="right">
                <EmailOutlinedIcon />
                <MoreVertIcon />
              </div>
            </div>
            <Posts userId={userId} />
          </div>
          {openUpdate && <Update setOpenUpdate={setOpenUpdate} user={data} />}
        </>
      )}
    </div>
  );
};

export default Profile;
