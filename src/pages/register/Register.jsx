import "./register.scss";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
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
