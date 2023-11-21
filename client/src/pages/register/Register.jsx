import "./register.scss";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
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
          <span>Already have an account? Login below!</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
