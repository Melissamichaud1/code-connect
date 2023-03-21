import "./login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Code Connect.</h1>
          <p>
            Discover a new kind of social networking designed exclusively for
            web developers like you! Our platform provides a cutting-edge space
            for you to connect, collaborate, and share your coding projects with
            fellow coders and software engineers. Get inspired by innovative
            ideas, participate in exciting events, and stay ahead of the curve
            on the latest industry trends.
          </p>
          <p>
            Don't wait any longer to elevate your coding game - join our
            community today and experience the power of collaborative
            creativity!
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
