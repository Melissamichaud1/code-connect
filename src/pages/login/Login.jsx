import "./login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Code Connect.</h1>
          <p>
            Connect with fellow coders and software engineers from around the
            world on our social media app designed specifically for the tech
            community. Share ideas, collaborate on projects, and stay up-to-date
            on the latest industry trends. Join our community today and elevate
            your coding game!
          </p>
          <span>Don't have an account? Register below!</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
