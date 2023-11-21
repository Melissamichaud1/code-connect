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
                src="https://emojis.wiki/thumbs/emojis/woman-technologist.webp"
                alt=""
              />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>request</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://emojis.wiki/thumbs/emojis/man-technologist.webp"
                alt=""
              />
              <span>John Doe</span>
            </div>
            <div className="buttons">
              <button>request</button>
              <button>dismiss</button>
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
                src="https://emojis.wiki/thumbs/emojis/man-technologist.webp"
                alt=""
              />
              <p>
                <span>John Doe</span> added a new project.
              </p>
            </div>
            <span>1 minute ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://emojis.wiki/thumbs/emojis/woman-technologist.webp"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://emojis.wiki/thumbs/emojis/woman-technologist.webp"
                alt=""
              />
              <div className="online" />
              <span>Aria Azam</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
