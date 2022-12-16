import React, { useState } from "react";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const submitHandle = (e) => {
    e.preventDefault();
    Login(details);
  };
  return (
    <div className="form">
      <form onSubmit={submitHandle}>
        <div className="form_inner">
          <h1>Login</h1>
          {error !== "" ? <div className="error">{error}</div> : ""}
          <div className="form_group">
            <input
              placeholder="Enter your name"
              type="text"
              name="name"
              id="name"
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              value={details.name}
            />
          </div>
          <div className="form_group">
            <input
              placeholder="Enter your email"
              type="email"
              name="email"
              id="email"
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              value={details.email}
            />
          </div>
          <div className="form_group">
            <input
              placeholder="Password"
              type="password"
              name="password"
              id="password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            />
          </div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
export default LoginForm;
