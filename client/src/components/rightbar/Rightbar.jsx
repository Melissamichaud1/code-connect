import "./rightBar.scss";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://aaah0mnbncqtinas.public.blob.vercel-storage.com/1uLx3BWbXu-no-background-ReYIOPadsVWeNHU5D7o7npSsfGUQlD.png"
                alt=""
              />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>Request</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/man-light-skin-tone.png"
                alt=""
              />
              <span>Jack Doe</span>
            </div>
            <div className="buttons">
              <button>Request</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://emojis.wiki/thumbs/emojis/man-technologist.webp"
                alt=""
              />
              <p>
                <span>John Doe</span> added a new project.
              </p>
            </div>
            <span>1 minute ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://www.aljazeera.com/wp-content/uploads/2017/07/d2e28e44190b40978c263abb592463e5_18.jpeg?resize=770%2C513&quality=80"
                alt=""
              />
              <p>
                <span>Julie Doe</span> organized a new Hackathon.
              </p>
            </div>
            <span>3 minutes ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/woman-red-haired-light-skin-tone.png"
                alt=""
              />
              <p>
                <span>Jennifer Doe</span> published a code snippit.
              </p>
            </div>
            <span>5 minutes ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://play-lh.googleusercontent.com/OGePWW0cvKfhIPz4C7RvpXOb5YpFBOkX5-H4u6Rn8A0b2rNWoSM-xdEgKpeB8P17RA_5"
                alt=""
              />
              <p>
                <span>Julius Doe</span> invited you to a code jam event.
              </p>
            </div>
            <span>10 minutes ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://play-lh.googleusercontent.com/OGePWW0cvKfhIPz4C7RvpXOb5YpFBOkX5-H4u6Rn8A0b2rNWoSM-xdEgKpeB8P17RA_5"
                alt=""
              />
              <div className="online" />
              <span>Julius Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/man-light-skin-tone.png"
                alt=""
              />
              <div className="online" />
              <span>Jack Doe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
