// import { useContext, useState } from "react";
// import "./login.scss";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../context/authContext";

// const Login = () => {
//   const [inputs, setInputs] = useState({
//     username: "",
//     password: "",
//   });
//   const [err, setErr] = useState(null);

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };
//   const { login } = useContext(AuthContext);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await login(inputs);
//       navigate("/");
//     } catch (err) {
//       setErr(err.response.data);
//     }
//   };

//   return (
//     <div className="login">
//       <div className="card">
//         <div className="left">
//           <h1>Code Connect.</h1>
//           <p>
//             Discover a new kind of social networking designed exclusively for
//             web developers like you! Our platform provides a cutting-edge space
//             for you to connect, collaborate, and share your coding projects with
//             fellow coders and software engineers. Get inspired by innovative
//             ideas, participate in exciting events, and stay ahead of the curve
//             on the latest industry trends.
//           </p>
//           <p>
//             Don't wait any longer to elevate your coding game - join our
//             community today and experience the power of collaborative
//             creativity!
//           </p>
//           <span>Don't have an account? Register below!</span>
//           <Link to="/register">
//             <button>Register</button>
//           </Link>
//         </div>
//         <div className="right">
//           <h1>Login</h1>
//           <form autoComplete="off">
//             <input
//               autoComplete="off"
//               type="text"
//               placeholder="Username"
//               name="username"
//               onChange={handleChange}
//             />
//             <input
//               autocomplete="new-password"
//               type="password"
//               placeholder="Password"
//               name="password"
//               onChange={handleChange}
//             />
//             {err && err}
//             <button onClick={handleLogin}>Login</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
import { useContext, useState, useEffect } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(null);
  const navigate = useNavigate();
  const { currentUser, login } = useContext(AuthContext);

  useEffect(() => {
    if (currentUser) {
      navigate("/"); // Redirect to home page if currentUser is set
    }
  }, [currentUser, navigate]);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      // No immediate navigate call here; useEffect will handle navigation on currentUser update
    } catch (err) {
      setErr(err.response.data);
    }
  };

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
          <form autoComplete="off" onSubmit={handleLogin}>
            <input
              autoComplete="off"
              type="text"
              placeholder="Username"
              name="username"
              value={inputs.username}
              onChange={handleChange}
            />
            <input
              autoComplete="new-password"
              type="password"
              placeholder="Password"
              name="password"
              value={inputs.password}
              onChange={handleChange}
            />
            {err && <p className="error">{err}</p>}
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
