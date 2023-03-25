import "./leftBar.scss";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import PeopleIcon from "@mui/icons-material/People";
import EventIcon from "@mui/icons-material/Event";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ForumIcon from "@mui/icons-material/Forum";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Leftbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="item">
            <AccountCircleIcon style={{ fontSize: 40 }} />
            <span>{currentUser.name}</span>
          </div>

          <div className="item">
            <PeopleIcon style={{ fontSize: 40 }} />
            <span>Friends</span>
          </div>
          <div className="item">
            <Diversity3OutlinedIcon style={{ fontSize: 40 }} />
            <span>Groups</span>
          </div>
          <div className="item">
            <EventIcon style={{ fontSize: 40 }} />
            <span>Events</span>
          </div>
          <div className="item">
            <IntegrationInstructionsIcon style={{ fontSize: 40 }} />
            <span>My Projects</span>
          </div>
          <div className="item">
            <ForumIcon style={{ fontSize: 40 }} />
            <span>Messages</span>
          </div>
        </div>
        {/* <hr /> */}
      </div>
    </div>
  );
};

export default Leftbar;
